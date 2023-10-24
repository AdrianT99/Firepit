import CreateWishlistModal from "../ui/modals/createWishlistModal";

function ListingItem(props) {
  return (
    <li className="flex-shrink-0 relative">
      <div className="p-4">
        <div className="relative mb-4">
          <CreateWishlistModal />
          <img
            className="w-full h-48 sm:h-72 object-cover rounded-3xl"
            src={props.image}
            alt={props.location}
          />
        </div>
        <h3 className="text-lg font-medium mb-2">{props.location}</h3>
        <p className="text-gray-600 mb-1">{props.distance}</p>
        <p className="text-gray-600 mb-1">{props.dates}</p>
        <p className="text-green-600 font-bold">{props.price}</p>
      </div>
    </li>
  );
}

export default ListingItem;


