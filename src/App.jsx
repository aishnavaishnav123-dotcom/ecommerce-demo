import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserLayout from "./layouts/UserLayout";
import ProductOwnerLayout from "./layouts/ProductOwnerLayout";

import Home from "./Pages/Home";
import ProductDetails from "./Pages/Home/ProductDetails";
import Login from "./Pages/Home/Login";
import Register from "./Pages/Home/Register";
import CartPage from "./Pages/Home/CartPage";
import CheckoutPage from "./Pages/Home/CheckoutPage";
import VerifyOtp from "./Pages/VerifyOtp/VerifyOtp";
import MyAccount from "./Pages/Home/MyAccount";
import Products from "./Pages/ProductOwner/Products";

import OwnerDashboard from "./Pages/ProductOwner/Dashboard";
import AddProduct from "./Pages/ProductOwner/AddProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* CUSTOMER ROUTES (WITH HEADER) */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/checkoutpage" element={<CheckoutPage />} />
          <Route path="/verify" element={<VerifyOtp />} />
          <Route path="/account" element={<MyAccount />} />
        </Route>

        {/* PRODUCT OWNER ROUTES (NO HEADER) */}
       <Route path="/product-owner" element={<ProductOwnerLayout />}>
  <Route index element={<OwnerDashboard />} />
  <Route path="products/add" element={<AddProduct />} />
  <Route path="products" element={<Products />} />

</Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;


