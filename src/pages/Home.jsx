import Products from './Products.jsx'
import { useContext, useState,createContext } from 'react'
import { api } from '../Context.jsx'
import { Link } from 'react-router-dom'
export const inputvalue=createContext()
function Home() {
  const { count} = useContext(api)
  const [inpval,setInpval]=useState('')
  const [actinpval,setActinpval]=useState('')
  const change=()=>{
    setInpval(actinpval)
  }
  return (
    <>
      <nav>
        <h1 className='title'>Ecommerce Website</h1>
        <div className='input-container'>
          <input type="text" placeholder='Search for items..' className='inp' onChange={(e)=>setActinpval(e.target.value)} onKeyDown={(e)=>e.key=='Enter' && change()}/>
          <button className='butt' onClick={()=>change()}>Submit</button>
        </div>
        <ul className='container'>
          <li className='li'>Orders</li>
          <li className='li'><Link to="/cart">🛒Cart {count > 0 ? count : null}</Link></li>
        </ul>
      </nav>
      <inputvalue.Provider value={{inpval,setInpval}}>
              <Products />
      </inputvalue.Provider>
    </>
  )
}
export default Home