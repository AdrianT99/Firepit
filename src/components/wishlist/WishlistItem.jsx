import React from "react";

function WishlistItem(props) {
  return (
    <li className="flex-shrink-0 relative">
      <div className="p-4">
        {props.list.map((item) => (
          <div key={item.id} className="relative mb-4">
            <img
              className="w-80 h-48 sm:h-72 object-cover rounded-3xl border-[5px] border-color: rgb(255,255,255) shadow-xl"
              src={item.image}
              alt={item.location}
            />
            <div className="mt-3 pl-3">
              <h3 className="text-lg font-medium mb-2">{props.name}</h3>
              <p className="text-gray-600 mb-1">{props.collection}</p>
            </div>
          </div>
        ))}
      </div>
    </li>
  );
}

export default WishlistItem;

