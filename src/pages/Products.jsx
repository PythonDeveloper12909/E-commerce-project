import { useState, useEffect} from "react";
function Products(){
    const [products, setProducts] = useState([]);
    
      useEffect(() => {
        fetch("https://dummyjson.com/products?limit=100")
          .then(res => res.json())
          .then(data => setProducts(data.products));
      }, []);
    
      return (
        <div className="product-container">
          {products.map(product => (
              <div key={product.id} className="card">
                <img src={product.thumbnail} className="img" />
                <h2 className="name">{product.title}</h2>
                <p className="price">${product.price}</p>
              </div>
          ))}
        </div>
      );
}
export default Products