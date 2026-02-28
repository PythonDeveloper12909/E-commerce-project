import { Link } from "react-router-dom"
import './orders.css'
function Orders(){
        return(
            <>
            <nav className="orders-nav">
                <h1 className="ecome" >Ecommerce Website</h1>
                <input type="text" className="orders-inp"/>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/cart">Cart</Link>
                </div>
            </nav>
            <h1 className="orders-label">Your Orders</h1>
            </>
        )
}
export default Orders