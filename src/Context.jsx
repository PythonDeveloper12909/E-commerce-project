import { createContext, useState, useEffect } from "react";
export const api = createContext();
export const cartapi = createContext();
export const totalpriceapi = createContext();
export const inputvalue = createContext();
export const orderhistoryapi = createContext();
export const tracked_product_api = createContext();
function Context({ children }) {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem("count");
    return saved ? JSON.parse(saved) : 0;
  });
  const [cart, setCart] = useState(() => {
    try {
      const saved_products = localStorage.getItem(`products`);
      const parsed = saved_products ? JSON.parse(saved_products) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });
  const [totalprice, setTotalprice] = useState(() => {
    const saved = localStorage.getItem("totalprice");
    return saved ? JSON.parse(saved) : 0;
  });
  const [inpval, setInpval] = useState("");
  const [orderhistory, setOrderhistory] = useState(() => {
    const saved_history = localStorage.getItem("orderhistory");
    return saved_history ? JSON.parse(saved_history) : [];
  });
  const [trackedproduct, setTrackedproduct] = useState(() => {
    const saved_tracked_product = localStorage.getItem("tracked_product");
    try {
      return saved_tracked_product && saved_tracked_product !== undefined
        ? JSON.parse(saved_tracked_product)
        : [];
    } catch (error) {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);
  useEffect(() => {
    localStorage.setItem(`products`, JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    localStorage.setItem("totalprice", JSON.stringify(totalprice));
  }, [totalprice]);
  useEffect(() => {
    localStorage.setItem("orderhistory", JSON.stringify(orderhistory));
  }, [orderhistory]);
  useEffect(() => {
    localStorage.setItem("tracked_product", JSON.stringify(trackedproduct));
  }, [trackedproduct]);
  return (
    <>
      <api.Provider value={{ count, setCount }}>
        <cartapi.Provider value={{ cart, setCart }}>
          <totalpriceapi.Provider value={{ totalprice, setTotalprice }}>
            <inputvalue.Provider value={{ inpval, setInpval }}>
              <orderhistoryapi.Provider
                value={{ orderhistory, setOrderhistory }}
              >
                <tracked_product_api.Provider
                  value={{ trackedproduct, setTrackedproduct }}
                >
                  {children}
                </tracked_product_api.Provider>
              </orderhistoryapi.Provider>
            </inputvalue.Provider>
          </totalpriceapi.Provider>
        </cartapi.Provider>
      </api.Provider>
    </>
  );
}
export default Context;
