/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import CreateWishlistModal from "../ui/modals/CreateWishlistModal";
import WishlistModal from "../ui/modals/WishlistModal";
import { addWishlistItem } from "../../features/state/wishlist/wishlistSlice"; // Update the path
//import WishlistButton from "../ui/buttons/WishlistButton";

function ListingItem(props) {
  const emptyFlag = useSelector((state) => state.wishlist.isEmpty);

  return (
    <div
      className="relative bg-white rounded-md p-4"
      style={{ width: "340px", height: "480px" }}
    >
      <div className="relative">
        {emptyFlag ? <CreateWishlistModal item={props} /> : <WishlistModal item={props}/>}
        <img
          className="w-96 h-80 object-cover rounded-2xl mb-8"
          src={props.image}
          alt={props.location}
        />
      </div>
      <h3 className="text-lg font-medium mb-2">{props.location}</h3>
      <p className="text-gray-600 mb-1">{props.distance}</p>
      <p className="text-gray-600 mb-1">{props.dates}</p>
      <p className="text-black font-bold">{props.price}</p>
    </div>
  );
}

export default ListingItem;
