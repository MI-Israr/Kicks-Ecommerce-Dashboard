import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Register from "./pages/Register/Register";
import HomePage from "./pages/HomePage/HomePage";
import AllProducts from "./pages/All Products/AllProducts";
import OrdersList from "./pages/Orders List/OrdersList";
import DashBoard from "./pages/DashBoard/DashBoard";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import OrderDetail from "./pages/OrderDetail/OrderDetail";
import Register from "./pages/Register/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route index element={<DashBoard />} />
        <Route path="products" element={<AllProducts />} />
        <Route path="orders" element={<OrdersList />} />
        <Route path="orders-detail/:orderId" element={<OrderDetail />} />
        <Route path="product-details/:id" element={<ProductDetails />} />
      </Route>

      <Route path="register" element={<Register />} />
    </Routes>
  );
}

export default App;
