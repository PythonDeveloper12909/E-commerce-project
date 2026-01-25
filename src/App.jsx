import './index.css'
import {Routes,Route} from 'react-router'
import Home from './Home.jsx'
import Cart from './Cart.jsx'
function App() {
   return( 
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='cart' element={<Cart/>}></Route>
    </Routes>
   )
}

export default App
