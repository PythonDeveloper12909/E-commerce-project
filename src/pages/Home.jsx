import Products from './Products.jsx'
function Home(){
  return(
    <>
      <nav>
          <h1 className='title'>Ecommerce Website</h1>
          <input type="text" placeholder='Search for items..'/>
          <ul>
            <li>Orders</li>
            <li>Cart</li>
          </ul>
      </nav>
      <Products/>
    </>
  )
}
export default Home