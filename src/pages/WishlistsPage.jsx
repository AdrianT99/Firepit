import { useSelector } from "react-redux";
import Navbar from "../components/layout/Navbar";
import EmptyWishlistMessage from "../components/ui/messages/EmptyWishlistMessage";
import WishLists from "../components/wishlist/Wishlists";

function WishlistsPage() {
  const emptyFlag = useSelector((state) => state.wishlist.isEmpty);

  return (
    <section>
      <Navbar />
      {emptyFlag ? <EmptyWishlistMessage /> : <WishLists />}
    </section>
  );
}

export default WishlistsPage;
