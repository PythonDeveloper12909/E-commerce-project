import "./tracking.css";
import { useState, useContext, useEffect } from "react";
import Products from "./Products.jsx";
import {
  inputvalue,
  cartapi,
  orderhistoryapi,
  tracked_product_api,
} from "../Context.jsx";
import Navbar from "../Navbar.jsx";
function Tracking() {
  const { inpval } = useContext(inputvalue);
  const { cart, setCart } = useContext(cartapi);
  const { orderhistory, setOrderhistory } = useContext(orderhistoryapi);
  const { trackedproduct, setTrackedproduct } = useContext(tracked_product_api);
  // const [progress, setProgress] = useState(0);
  // const current_date = new Date();
  // const current_date_format = current_date.toLocaleDateString("en-US", {
  //   weekday: "short",
  //   month: "short",
  //   day: "numeric",
  // });
  // console.log(current_date_format);
  const parseShippingDate = (dateStr) => {
    const parts = dateStr.replace(",", "").split(" ");
    const months = {
      Jan: 0,
      Feb: 1,
      Mar: 2,
      Apr: 3,
      May: 4,
      Jun: 5,
      Jul: 6,
      Aug: 7,
      Sep: 8,
      Oct: 9,
      Nov: 10,
      Dec: 11,
    };
    const monthStr = parts[1];
    const day = parseInt(parts[2], 10);
    const year = parts[3] ? parseInt(parts[3], 10) : new Date().getFullYear();
    return new Date(year, months[monthStr], day);
  };
  const getProgress = (shippingdate, shippingOption) => {
    const today = new Date();
    const shipping = parseShippingDate(shippingdate);

    const days =
      shippingOption === "nextday" ? 1 : shippingOption === "express" ? 3 : 7; 

    const orderdate = new Date(shipping);
    orderdate.setDate(orderdate.getDate() - days);

    if (today < orderdate) return 0; // not started
    if (today >= shipping) return 100; // delivered

    const total = shipping - orderdate;
    const elapsed = today - orderdate;
    const ratio = elapsed / total;
    return ratio < 0.5 ? 33 : 66; // preparing or shipped
  };
  useEffect(() => {
    console.log(trackedproduct);
  }, [trackedproduct]);
  return (
    <>
      <Navbar />
      {inpval === "" ? (
        <>
          <a className="link-to-orders" href="/orders">
            View all orders
          </a>
          {trackedproduct &&
            trackedproduct.map((prop, index) => (
              <>
                <h1 className="arrive">Arriving on {prop.shippingdate}</h1>
                <h2 className="title-track">{prop.title}</h2>
                <h2 className="track-qty">Quantity: {prop.qty}</h2>
                <img
                  className="track-img"
                  src={prop.thumbnail}
                  alt={prop.title}
                />
                <div className="main-progress-container">
                  <div className="progress-bar-labels">
                    <div className="prepare">Preparing</div>
                    <div className="shipped">Shipped</div>
                    <div className="delivered">Delivered</div>
                  </div>
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${getProgress(prop.shippingdate, prop.shippingOption)}%`,
                        transition: "width 1s ease",
                      }}
                    ></div>
                  </div>
                </div>
              </>
            ))}
        </>
      ) : (
        <Products />
      )}
    </>
  );
}
export default Tracking;
