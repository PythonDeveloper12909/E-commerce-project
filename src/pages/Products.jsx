import { useState, useEffect } from "react";
function Products({ count }) {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0)
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  const updatecount = () => {
    setCount(c => c + 1)
  }
  return (
    <div className="product-container">
      {products.map(product => (
        <div key={product.id} className="card">
          <img src={product.thumbnail} className="img" />
          <h2 className="name">{product.title}</h2>
          <p className="price">${product.price}</p>
          <select className="quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <button className="cart-butt" onClick={updatecount}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}
export default Products