import Products from './Products.jsx'
function Home(){
  return(
    <>
      <nav>
          <h1 className='title'>Ecommerce Website</h1>
          <div className='input-container'>
            <input type="text" placeholder='Search for items..' className='inp'/>
            <button className='butt'>Submit</button>
          </div>
          <ul className='container'>
            <li className='li'>Orders</li>
            <li className='li'>Cart</li>
          </ul>
      </nav>
      <Products/>
    </>
  )
}
export default Home