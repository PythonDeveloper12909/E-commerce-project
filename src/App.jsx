import './index.css'
import './Products.css'
import { Routes, Route } from 'react-router'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import Context from './Context.jsx'
import Products from './pages/Products.jsx'

function App() {
    return (
            <Context>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='cart' element={<Cart />}></Route>
                </Routes>
            </Context>
    )
}

export default App
