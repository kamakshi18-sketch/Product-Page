// import React from 'react'

// const AddToCart = ({ cart, setCart }) => {

//     function removeFromCart(id) {
//         const updated = cart.filter((item) => item.id !== id)
//         setCart(updated)
//     }

//     return (
//         <div style={{
//             border: "3px solid black",
//             borderRadius: "8px",
//             padding: "20px",
//             margin: "20px",
//         }}>
//             <h2>🛒 Cart ({cart.length} items)</h2>

//             {cart.length === 0 ? (
//                 <p>Your cart is empty!</p>
//             ) : (
//                 cart.map((item) => (
//                     <div key={item.id} style={{
//                         display: "flex",
//                         alignItems: "center",
//                         gap: "15px",
//                         borderBottom: "1px solid black",
//                         padding: "10px 0"
//                     }}>
//                         <img src={item.image} 
//                              style={{width:"80px", height:"80px", objectFit:"cover"}} />
//                         <div style={{flex:1}}>
//                             <h3>{item.tittle}</h3>
//                             <p>Category: {item.category}</p>
//                             <p>Quantity: {item.quantity}</p>
//                             <p>Rating: {item.rating} ⭐</p>
//                         </div>
//                         <button 
//                             onClick={() => removeFromCart(item.id)}
//                             style={{
//                                 padding:"8px 12px",
//                                 backgroundColor:"red",
//                                 color:"white",
//                                 border:"none",
//                                 borderRadius:"5px",
//                                 cursor:"pointer"
//                             }}>
//                             Remove
//                         </button>
//                     </div>
//                 ))
//             )}
//         </div>
//     )
// }

// export default AddToCart