//import './App.css'
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WishlistsPage from "./pages/WishlistsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="wishlists" element={<WishlistsPage />} />
      </Routes>
    </>
  );
}

export default App;
