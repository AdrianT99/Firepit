import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

function LanguageButton() {
  let [isOpen, setIsOpen] = useState(true);

  let [isActive, setIsActive] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button type="button" onClick={openModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="black"
          className="w-6 h-6 mt-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg max-h-64 transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="relative">
                    <button
                      type="button"
                      className=" hover:bg-gray-100 rounded-full p-2"
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
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-bold leading-6 text-gray-900 pb-8 text-center"
                  >
                    Language and Region
                  </Dialog.Title>
                  <div className="mt-2 flex justify-between">
                    <div>
                      <button className="hover:bg-gray-100 px-4 py-1 inline-block rounded-md">
                        <h3 className="relative pr-11 font-medium">English</h3>
                        <p>United States</p>
                      </button>
                    </div>
                    <div>
                      <button className="hover:bg-gray-100 px-4 py-1 inline-block rounded-md">
                        <h3 className="relative pr-11 font-medium">Spanish</h3>
                        <p>Latinoamerica</p>
                      </button>
                    </div>
                    <div>
                      <button className="hover:bg-gray-100 px-4 py-1 inline-block rounded-md">
                        <h3 className="relative pr-12 font-medium">Français</h3>
                        <p className="relative pr-[60px]">France</p>
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default LanguageButton;
