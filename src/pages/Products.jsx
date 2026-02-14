import { useState, useEffect, useContext} from "react";
import { api,cartapi} from '../Context.jsx'
import {inputvalue} from './Home.jsx'
function Products() { 
  const [products, setProducts] = useState([]);
  const { setCount } = useContext(api);
  const {inpval}=useContext(inputvalue)
  const [val, setVal] = useState({});
  const {cart,setCart}=useContext(cartapi)
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  const updatecount = (id,product) => {
    const quantity = val[id] || 1
    setCount(c => c + quantity)
    product.qty=quantity
    cart.includes(product) ? (()=>setCart(cart.filter((_,i)=>id!==i))) : setCart(prevcart=>[...prevcart,product])
    // console.log(product)
    console.log(cart)
    console.log(quantity)
  }
  const filteredproducts=products.filter(product=>product.title.toLowerCase().includes(inpval.toLowerCase()))
  
  return (
    <>
      <div className="product-container">
        {filteredproducts.length !==0  ? products.map(product => (
          product.title.toLowerCase().includes(inpval.toLowerCase()) ?
          (<div key={product.id} className="card" >
            <img src={product.thumbnail} className="img" />
            <h2 className="name">{product.title}</h2>
            <p className="price">${product.price}</p>
            <select className="quantity" onChange={(e) => setVal(prev => ({ ...prev, [product.id]: Number(e.target.value) }))}>
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
            <button className="cart-butt" onClick={() => updatecount(product.id,product)}>Add to cart</button>
          </div >):(null)
      )) : <h2 className="no-products">No products like that!</h2>}
        </div>
    </>
  );
}
export default Products