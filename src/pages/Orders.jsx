import "./orders.css";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar.jsx";
import Products from "./Products.jsx";
import {
  inputvalue,
  cartapi,
  orderhistoryapi,
  tracked_product_api,
} from "../Context.jsx";
import React from "react";
function Orders() {
  const { inpval } = useContext(inputvalue);
  const { cart, setCart } = useContext(cartapi);
  const { orderhistory, setOrderhistory } = useContext(orderhistoryapi);
  const { trackedproduct, setTrackedproduct } = useContext(tracked_product_api);
  const sortedhistory = [...orderhistory].reverse();
  const clearorderhistory = () => {
    setOrderhistory([]);
  };
  const tracking_check = (index, product) => {
    setTrackedproduct([product]);
  };
  useEffect(() => {
    console.log(sortedhistory);
  }, [sortedhistory]);
  return (
    <>
      <Navbar />
      {inpval === "" ? (
        <>
          <div className="orders-page">
            <h1 className="orders-label">Your Orders</h1>
            {sortedhistory.map((history, index) => (
              <div className="orders-card" key={index}>
                <div className="orders-header">
                  <div className="left-wing">
                    <div className="orders-placed">
                      <p className="placed-label">Order Placed:</p>
                      <p className="placed-date">{history.orderdate}</p>
                    </div>
                    <div className="orders-total">
                      <p className="total-label">Total:</p>
                      <p className="total-amount">{history.Ordertotal}</p>
                    </div>
                  </div>
                  <div className="right-wing">
                    <p className="id-label">Order ID:</p>
                    <p className="id-value">{history.orderid}</p>
                  </div>
                </div>
                <div className="orders-card-container">
                  {history.items.map((item, index) => (
                    <React.Fragment key={index}>
                      <div className="each-align">
                        <img src={item.thumbnail} alt={item.title} />
                        <div className="card-text">
                          <p className="item-name">{item.title}</p>
                          <p className="arrival-info">
                            Arriving on: {item.shippingdate}
                          </p>
                          <p className="quantity-info">Quantity: {item.qty}</p>
                        </div>
                        <button className="add_to_cart">Add to cart</button>
                        <Link to="/tracking">
                          <button
                            className="tracking"
                            onClick={() => tracking_check(index, item)}
                          >
                            Track Package
                          </button>
                        </Link>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => clearorderhistory()}
            className="clearorderhistorybutt"
          >
            Clear Orderhistory
          </button>
        </>
      ) : (
        <Products />
      )}
    </>
  );
}
export default Orders;
