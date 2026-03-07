import "./index.css";
import "./Products.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import Context from "./Context.jsx";
import Reset from "./Reset.jsx";
import Orders from "./pages/Orders.jsx";
import Tracking from "./pages/Tracking.jsx";
function App() {
  return (
    <Context>
      <Routes>
        <Route element={<Reset />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="orders" element={<Orders />}></Route>
          <Route path="tracking" element={<Tracking />}></Route>
        </Route>
      </Routes>
    </Context>
  );
}

export default App;
