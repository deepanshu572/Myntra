import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import AllProduct from "./Pages/AllProduct/AllProduct";
import Cart from "./Pages/Cart/Cart";
import { useLocation } from "react-router-dom";
import CheckoutNav from "./Components/CheckoutComponent/CheckoutNav";
import Search from "./Pages/Search/Search";
import Wishlist from "./Pages/Wishlist/Wishlist";
import Profile from "./Pages/Profile/Profile";
import Address from "./Pages/Address/Address";

const App = () => {
  const location = useLocation();
  const isCartPage = location.pathname.includes("/cart") || location.pathname.includes("/Address");
  

  return (
    <>
      {isCartPage ? <CheckoutNav /> : <Navbar />}

      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="AllProduct/:name" element={<AllProduct />} />
        <Route path="checkout/cart" element={<Cart />} />
        <Route path="Search/:query" element={<Search />} />
        <Route path="Wishlist/" element={<Wishlist />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="/Address" element={<Address />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;






// import React, { useEffect, useState } from "react";

// // === API Configuration ===
// const kalamAPI = "https://pos.kalamitcompany.com/api/";
// const projectID = "9125";
// const appAPI = kalamAPI + "mygalla_V1/index.php?projectID=" + projectID;
// const imgLink = kalamAPI + "images/";

// const App = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const formData = new FormData();
//       formData.append("type", "39");

//       try {
//         const req = await fetch(appAPI, {
//           method: "POST",
//           body: formData,
//         });
//         const res = await req.json();
//         const data = res.products || [];
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="product-list">
//       {products.length > 0 ? (
//         products.map((product, index) => (
//           console.log(product),
//           <div key={index} className="product-card">
//             <img
//               src={imgLink + product.image}
//               alt={product.name}
//               style={{ width: "100px", height: "100px", objectFit: "cover" }}
//             />
//             <h4>{product.name}</h4>
//             <p>Price: ₹{product.price}</p>
//           </div>
//         ))
//       ) : (
//         <p>Loading or no products available.</p>
//       )}
//     </div>
//   );
// };

// export default App;
