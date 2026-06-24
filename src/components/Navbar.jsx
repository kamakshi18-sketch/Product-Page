import React from 'react'

function Navbar({cart,showCart,setshowCart}){
    return(
       <div style={{ display: "flex",justifyContent: "space-between", alignItems: "center", padding: "10px 20px",background: "white"}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG6l6BRX8gNfyz5HS1I_cwPEyu4X1yQMCEfrRYa0q5D07px_KO33Pwcyu-&s=10" style={{width: "70px", height: "70px"}}/>

        <input style={{backgroundColor:"white",color:"black", width:"300px", height:"30px", border:"2px black solid", borderRadius:"10px"}}type="text" placeholder='Search for Products..'></input>
        <button onClick={()=>setshowCart(!showCart)}
            style={{
                border:"black solid 6px",
                borderRadius:"10px",
                color:"white",
                backgroundColor:"black"
            }}>
                Cart({cart.length})
        </button>
        <div style={{display: "flex", gap: "1rem"}}>
        <span style={{color:"black"}}>Home</span>
        <span style={{color:"black"}}>Products</span>
        <span style={{color:"black"}}>About</span>
        <span style={{color:"black"}}>Contact Us</span>
        </div> 
        </div>
    ) 
}

export default Navbar