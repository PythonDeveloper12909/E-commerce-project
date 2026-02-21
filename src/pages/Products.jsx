import { useState, useEffect, useContext } from "react";
import { api, cartapi } from '../Context.jsx'
import { inputvalue } from './Home.jsx'
function Products() {
  const [products, setProducts] = useState([]);
  const { count, setCount } = useContext(api);
  const { inpval } = useContext(inputvalue)
  const [val, setVal] = useState({});
  const { cart, setCart } = useContext(cartapi)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then(res => res.json())
      .then(data => {
        setProducts(data.products)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, []);

  const updatecount = (id, product) => {
    let quantity = val[id] || 1
    const alreadproduct = cart.find(item => item.id === id)
    if (alreadproduct) {
      if (quantity > 9999 || count > 999999) {
        window.alert('max limit exceeded')
        return;
      }
      setCount(c => c + quantity)
      setCart(
        cart.map(item => item.id === id ? { ...item, qty: item.qty + quantity } : item)
      )
    }
    else {
      if (cart.length > 199) {
        window.alert('max product limit has been reached')
        return;
      }
      setCart(prevcart => [...prevcart, { ...product, qty: quantity }])
      setCount(c => c + quantity)
    }
  }
  const filteredproducts = products.filter(product => product.title.toLowerCase().includes(inpval.toLowerCase()))

  return (
    <>
      <div className="product-container">
        {loading ? <h1 className="load">Loading...</h1> : filteredproducts.length !== 0 ? filteredproducts.map(product => (
          <div key={product.id} className="card" >
            <img src={product.thumbnail} className="img" alt={product.title} />
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
            <button className="cart-butt" onClick={() => updatecount(product.id, product)}>Add to cart</button>
          </div >
        )) : <h2 className="no-products">No products like that!</h2>}
      </div>
    </>
  );
}
export default Products