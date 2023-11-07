/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import ListingItem from './ListingItem';

function ListingList(props) {
  const list = useSelector((state) => state.listing.list);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-1 mx-16 my-5">
      {list.map((listing) => (
        <ListingItem
          key={listing.id}
          id={listing.id}
          image={listing.image}
          location={listing.location}
          distance={listing.distance}
          dates={listing.dates}
          price={listing.price}
        />
      ))}
    </div>
  );
}

export default ListingList;



