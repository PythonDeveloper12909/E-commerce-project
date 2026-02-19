import './cart.css'
import { useContext,useState } from 'react'
import { api,cartapi} from '../Context.jsx'
import { Link } from 'react-router-dom'
function Cart() {
    const { count,setCount } = useContext(api);
    const {cart,setCart}=useContext(cartapi);
    const [showbutton,setShowbutton]=useState(null)
    const deletef=(index)=>{
        setCart(cart.filter((_,i)=>i!==index))
        const cartitem=cart.map(p=>p.qty)
        setCount(c=>c-cartitem[0])
        // setCount(0)
    }
    const update=(index)=>{
        setShowbutton(index)
    }
    return (
        <div className="cart-page">
            {count > 0 ? <h1 className='orders'>Your Orders ({count})</h1>
            : <h1 className='h1'>No items added yet!</h1>}
            <Link to="/"><h1 className='navigation'>Home</h1></ Link>
            <h2 className='review'>Review Your Orders</h2>
            <div className='product-showcase'>
                {cart.map((p,index)=>
                    p===null ? null : (
                    <div className='p-s-container' key={index}>
                        <img src={p.thumbnail} className='image'/>
                        <div className='text-container' key={index}>
                            <h1 key={index} className='tit'>{p.title}</h1>
                            <h2 className='pr'>${p.price}</h2>
                            <div className='quant-container' >
                                <h3>Quantity:{p.qty}</h3>
                                {showbutton===index ?
                                <>
                                    <button className='save'>Save</button>
                                    <button className='del' onClick={()=>deletef(index)}>Delete</button>
                                </> : 
                                <>
                                    <button className='update' onClick={()=>update(index)}>Update</button>
                                    <button className='del' onClick={()=>deletef(index)}>Delete</button>
                                </>}
                            </div>
                        </div>
                    </div>))}
            </div>
        </div>
    )
}
export default Cart