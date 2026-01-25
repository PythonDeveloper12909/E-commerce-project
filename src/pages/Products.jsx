import { useState, useEffect} from "react";
function Products(){
    const [products, setProducts] = useState([]);
    
      useEffect(() => {
        fetch("https://dummyjson.com/products?limit=100")
          .then(res => res.json())
          .then(data => setProducts(data.products));
      }, []);
    
      return (
        <div className="grid grid-cols-4 gap-4">
          {products.map(product => (
            <div key={product.id} className="border p-3">
              <img src={product.thumbnail} className="h-40 mx-auto" />
              <h2>{product.title}</h2>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      );
}
export default Products