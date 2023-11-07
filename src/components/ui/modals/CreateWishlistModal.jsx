/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import WishListForm from "../forms/WishListForm";
import CreateButton from "../buttons/CreateButton";
import ClearButton from "../buttons/ClearButton";
import { useDispatch } from "react-redux";
import { addWishlistItem } from "../../../features/state/wishlist/wishlistSlice";

function CreateWishlistModal(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSvgClicked, setIsSvgClicked] = useState(false);
  const dispatch = useDispatch();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const svgStyle = {
    transition: "fill 0.3s ease",
    fill: isSvgClicked ? "red" : "rgba(0, 0, 0, 0.5)",
  };

  const handleSvgClick = () => {
    setIsSvgClicked((prev) => !prev);
  };

  return (
    <div>
      <button
        type="button"
        className="absolute top-0 right-0 pt-3"
        onClick={openModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={svgStyle}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className={`w-8 h-7 mr-2 ${isSvgClicked ? "text-red-500" : ""}`}
          onClick={handleSvgClick}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />

          <div className="min-h-screen flex items-center justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="transform opacity-0 translate-y-full"
              enterTo="transform opacity-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Panel className="w-full max-w-xl h-[250px] transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex items-center justify-between mb-4">
                  <button
                    type="button"
                    className="hover:bg-gray-100 rounded-full p-2"
                    onClick={closeModal}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <div className="mx-auto text-center">
                    <header className="text-xl font-bold leading-6 text-gray-900">
                      <Dialog.Title as="h3">Create Wishlist</Dialog.Title>
                    </header>
                  </div>
                </div>

                <WishListForm />
                <div className="flex justify-between pt-14">
                  <ClearButton />
                  <CreateButton
                    onClick={() =>
                      dispatch(
                        addWishlistItem({
                          wishlistId: props.item.id,
                          item: props.item,
                        })
                      )
                    }
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default CreateWishlistModal;
