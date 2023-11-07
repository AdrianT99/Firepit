/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

function WishlistItem(props) {
  console.log(props.list); // Add this line for debugging

  return (
    <li className="flex-shrink-0 relative">
      <div className="p-4">
        {props.list && props.list.length > 0 && (
          <div key={props.list[0].id} className="relative mb-4">
            <img
              className="w-80 h-48 sm:h-72 object-cover rounded-3xl border-[5px] border-color: rgb(255,255,255) shadow-xl"
              src={props.list[0].image}
              alt={props.list[0].location}
            />
            <div className="mt-3 pl-3">
              <h3 className="text-lg font-medium mb-2">{props.name}</h3>
            </div>
          </div>
        )}
      </div>
      <p className="text-gray-600 mb-1">{props.list ? props.list.length : 0}</p>
    </li>
  );
}

export default WishlistItem;

