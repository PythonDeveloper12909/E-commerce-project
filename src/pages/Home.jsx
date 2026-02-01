import Products from './Products.jsx'
import { useContext, useState } from 'react'
import { api } from '../Context.jsx'
import { Link } from 'react-router-dom'

function Home() {
  const { count, setCount } = useContext(api)
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
          <li className='li'><Link to="/cart">🛒Cart {count > 0 ? count : null}</Link></li>
        </ul>
      </nav>
      <Products />
    </>
  )
}
export default Home