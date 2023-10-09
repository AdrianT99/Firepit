function ListingItem(props) {
  return (
    <li className="flex-shrink-0 relative">
      <div className="p-4">
        <div className="relative mb-4">
          <button className="absolute top-0 right-0 pt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="rgba(0, 0, 0, 0.5)"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-8 h-7 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
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


