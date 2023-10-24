import Navbar from "../components/layout/Navbar";
import WishLists from "../components/wishlist/Wishlists";


 function WishlistsPage() {
  return (
   <section>
   
    <Navbar />
    <h1 className="font-semibold text-4xl pl-16 my-6">Wishlists</h1>
    <WishLists />
   </section>
  )
}

export default WishlistsPage;
