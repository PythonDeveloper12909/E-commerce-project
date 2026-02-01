import { useState, useEffect, useContext } from "react";
import { api } from '../Context.jsx'

function Products() {
  const [products, setProducts] = useState([]);
  const { setCount } = useContext(api);
  const [val, setVal] = useState({});

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  const updatecount = (index) => {
    const quantity = val[index] || 1
    setCount(c => c + quantity)
  }
  return (
    <>
      <div className="product-container">
        {products.map((product, index) => (
          <div key={product.id} className="card" >
            <img src={product.thumbnail} className="img" />
            <h2 className="name">{product.title}</h2>
            <p className="price">${product.price}</p>
            <select className="quantity" onChange={(e) => setVal(prev => ({ ...prev, [index]: Number(e.target.value) }))} >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
            <button className="cart-butt" onClick={() => updatecount(index)}>Add to cart</button>
          </div >
        ))}
      </div >
    </>
  );
}
export default Products