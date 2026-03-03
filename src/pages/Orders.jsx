import "./orders.css";
import { useContext, useEffect } from "react";
import Navbar from "../Navbar.jsx";
import Products from "./Products.jsx";
import { inputvalue, orderhistoryapi } from "../Context.jsx";
function Orders() {
  const { inpval } = useContext(inputvalue);
  const { orderhistory, setOrderhistory } = useContext(orderhistoryapi);
  // const sortedorders = orderhistory.sort((a, b) => {
  //   new Date(b.date) - new Date(a.date);
  // });
  return (
    <>
      <Navbar />
      {inpval === "" ? (
        <>
          <div className="orders-page">
            <h1 className="orders-label">Your Orders</h1>

            {orderhistory.map((product, index) => (
              <div className="orders-card" key={index}>
                <div className="orders-header">
                  <div className="left-wing">
                    <div className="orders-placed">
                      <p className="placed-label">Order Placed:</p>
                      <p className="placed-date">{product.date}</p>
                    </div>
                    <div className="orders-total">
                      <p className="total-label">Total:</p>
                      <p className="total-amount">$56.8</p>
                    </div>
                  </div>
                  <div className="right-wing">
                    <p className="id-label">Order ID:</p>
                    <p className="id-value">a4fasd45-23dd3-4d</p>
                  </div>
                </div>
                <div className="orders-card-container">
                  <img src={product.thumbnail} alt={product.title} />
                  <div className="card-text">
                    <p className="item-name">{product.title}</p>
                    <p className="arrival-info">Arriving on: {product.date}</p>
                    <p className="quantity-info">Quantity: {product.qty}</p>
                    <button className="add_to_cart">Add to cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <Products />
      )}
    </>
  );
}
export default Orders;
