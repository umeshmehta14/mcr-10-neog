import { Route, Routes } from "react-router-dom";
import "./App.css";

import Department from "./Pages/Department/Department";
import Dashboard from "./Pages/Dashboard/Dashboard";
import SideBar from "./Components/SideBar/SideBar";
import Products from "./Pages/Products/Products";
import NewProduct from "./Pages/NewProduct/NewProduct";
import ProductDetail from "./Pages/Detail Page/ProductDetail";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/department" element={<Department />} />
        <Route path="/products" element={<Products />} />
        <Route path="/new-product" element={<NewProduct />} />
        <Route path="/product-detail/:productId" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
