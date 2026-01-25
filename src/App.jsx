import './index.css'
import './Products.css'
import {Routes,Route} from 'react-router'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
function App() {
   return( 
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='cart' element={<Cart/>}></Route>
    </Routes>
   )
}

export default App
