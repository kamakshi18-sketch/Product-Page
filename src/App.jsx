import React from 'react'
import MainLoading from './components/MainLoading'
import Navbar from './components/Navbar'
import { useState } from 'react'
// import Inc from './components/Inc'
const App = () => {
  const [cart,setCart]=useState([])
  const [showCart,setshowCart]=useState(false)  
  return (
    <div>
      <Navbar
      cart={cart}
      showCart={showCart}
      setshowCart={setshowCart}
      />
      {showCart && <div>
        {cart.length===0?(
          <h3>Cart Empty</h3>
        ):(
          cart.map((item)=>(
            <div key={item.id}>
              <h3>{item.tittle}</h3>
              <p>{item.category}</p>
            </div>
          ))
        )}
        <h2>Cart Items</h2>
        </div>}
      <MainLoading
      cart={cart}
      setCart={setCart}
      />
      {/* <Inc/> */}
    </div>
  )
}

export default App