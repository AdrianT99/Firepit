/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import WishlistItem from "./WishlistItem";


function WishLists(props) {

  const wishList = useSelector((state) => state.wishlist.wishLists)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-4 list-none mx-7">
      {wishList.map((wishlist) => (
        <WishlistItem
          key={wishlist.id}
          id={wishlist.id}
          name={wishlist.name}
          collection={wishlist.collection}
          list={wishlist.list}
        />
      ))}
    </div>
  );
}

export default WishLists;
