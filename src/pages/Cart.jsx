import './cart.css'
import { useContext, useState } from 'react'
import { api, cartapi } from '../Context.jsx'
import { Link } from 'react-router-dom'
function Cart() {
    const { count, setCount } = useContext(api);
    const { cart, setCart } = useContext(cartapi);
    const [showbutton, setShowbutton] = useState(null)
    const [changequantity, setChangequantity] = useState(null)
    const deletef = (index) => {
        setCart(cart.filter((_, i) => i !== index))
        setCount(c => c - cart[index].qty)
        setShowbutton(null)
    }
    const update = (index) => {
        setShowbutton(index)
        setChangequantity(cart[index].qty)
    }
    const save = (index) => {
        if (changequantity <= 0 || changequantity > 9999) {
            window.alert('Invalid quantity')
            return;
        }
        const oldqty = cart[index].qty
        const updatedcart = cart.map((item, i) => index === i ? { ...item, qty: Number(changequantity) } : item)
        setCart(updatedcart)
        setShowbutton(null)
        setCount(c => (c - oldqty) + Number(changequantity))

    }
    return (
        <div className="cart-page">
            <div className='nav-container'>
                <div className='center-nav'>
                    {count > 0 ? <h1 className='orders'>Your Orders ({count})</h1>
                        : <h1 className='h1'>No items added yet!</h1>}
                </div>
                <div className='right-nav'>
                    <Link to="/"><h1 className='navigation'>Home</h1></ Link>
                </div>
            </div>
            <h2 className='review'>Review Your Orders</h2>
            <div className='main-showcase'>
                <div className='product-showcase'>
                    {cart.map((p, index) =>
                        p === null ? null : (
                            <div className='p-s-container' key={p.id}>
                                <p className='delivery-date'>📦 Delivery by <span>Tuesday, March 17</span></p>
                                <div className='product-row'>
                                    <img src={p.thumbnail} className='image' alt={p.title} />
                                    <div className='text-container'>
                                        <h1 className='tit'>{p.title}</h1>
                                        <h2 className='pr'>${p.price}</h2>
                                        <div className='quant-container'>
                                            {showbutton === index ?
                                                <>
                                                    <label htmlFor="connect" className='label'>Quantity:<input type="number" id='connect' className='quantinp' onChange={(e) => setChangequantity(Number(e.target.value))} value={changequantity} /></label>
                                                    <button className='save' onClick={() => save(index)}>Save</button>
                                                    <button className='del' onClick={() => deletef(index)}>Delete</button>
                                                </> :
                                                <>
                                                    <h3>Quantity:{p.qty}</h3>
                                                    <button className='update' onClick={() => update(index)}>Update</button>
                                                    <button className='del' onClick={() => deletef(index)}>Delete</button>
                                                </>}
                                        </div>
                                    </div>
                                </div>
                            </div>))}
                </div>
                <div className='total-container'>
                    <h1 className='payment-summary'>Payment Summary</h1>
                    <h2 className='summary-row'>Items(4): $9.99</h2>
                    <h2 className='summary-row'>Shipping &amp; handling: $9</h2>
                    <h2 className='summary-row'>Total before tax: $105</h2>
                    <h2 className='summary-row'>Estimated tax: 10%</h2>
                    <hr className='summary-divider' />
                    <h2 className='order-total'>Order total: $105.23</h2>
                    <button className='place-order'>Place Your Order</button>
                </div>
            </div>
        </div>
    )
}
export default Cart