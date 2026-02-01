import './cart.css'
import { useContext } from 'react'
import { api } from '../Context.jsx'
function Cart() {
    const { count } = useContext(api);
    return (
        <div className="cart-page">
            {count > 0 ? <h1 className='orders'>Your Orders ({count})</h1>

                : <h1 className='h1'>No items added yet!</h1>}
        </div>
    )
}
export default Cart