import Products from './Products.jsx'
import { createContext, useState } from 'react'
export const api = createContext()
function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <h1 className='title'>Ecommerce Website</h1>
        <div className='input-container'>
          <input type="text" placeholder='Search for items..' className='inp' />
          <button className='butt'>Submit</button>
        </div>
        <ul className='container'>
          <li className='li'>Orders</li>
          <li className='li'><a href="/cart">🛒Cart {count > 0 ? count : null}</a></li>
        </ul>
      </nav>
      <api.Provider value={{ count, setCount }}>
        <Products />
      </api.Provider>
    </>
  )
}
export default Home