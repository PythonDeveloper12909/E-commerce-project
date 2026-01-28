import './index.css'
import './Products.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import { StoreProvider } from './context/store.js'
function App() {
    return (
        <StoreProvider>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='cart' element={<Cart />}></Route>
            </Routes>
        </StoreProvider>
    )
}

export default App
