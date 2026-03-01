import './orders.css'
import {useContext} from 'react'
import Navbar from '../Navbar.jsx'
import Products from './Products.jsx'
import { inputvalue } from '../Context.jsx'
function Orders(){
        const {inpval,setInpval}=useContext(inputvalue)
        return(
            <>
                <Navbar/>
                {inpval==='' ? <h1 className='orders-label'>Your Orders</h1> : <Products/>}
            </>
        )
}
export default Orders