import './cart.css'
import { useContext } from 'react'
import { api,cartapi} from '../Context.jsx'
function Cart() {
    const { count } = useContext(api);
    const {cart}=useContext(cartapi);
    return (
        <div className="cart-page">
            {count > 0 ? <h1 className='orders'>Your Orders ({count})</h1>

                : <h1 className='h1'>No items added yet!</h1>}
            <h2 className='review'>Review Your Orders</h2>
            <div className='product-showcase'>
                {cart.map((p,index)=><h1 key={index}>{p.id} : {p.qty}</h1>)}
            </div>
        </div>
    )
}
export default Cart