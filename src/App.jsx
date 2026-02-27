import './index.css'
import './Products.css'
import { Routes, Route } from 'react-router'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import Context from './Context.jsx'
import Reset from './Reset.jsx'
import Orders from './pages/Orders.jsx'
function App() {
    return (
            <Context>
                <Routes>
                    <Route element={<Reset/>}>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='cart' element={<Cart />}></Route>
                        <Route path='orders' element={<Orders/>}></Route>
                    </Route>
                </Routes>
            </Context>
    )
}

export default App
