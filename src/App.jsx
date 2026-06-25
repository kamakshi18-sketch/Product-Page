import React from 'react'
import MainLoading from './components/MainLoading'
import Navbar from './components/Navbar'
import { useState } from 'react'
// import Input from './components/Input'
// import Inc from './components/Inc'
const App = () => {
  const [cart,setCart]=useState([])
  const [showCart,setshowCart]=useState(false)  
  const [search,setSearch]=useState("")
  return (
    <div>
      <Navbar  
      cart={cart}
      showCart={showCart}
      setshowCart={setshowCart}
      search={search}          
      setSearch={setSearch}
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
      search={search}
      /> 
       {/* <Inc/>  */}
       {/* <Input/> */}
    </div> 
  )
}

export default App
// 
// import { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//   const [users, setUsers] = useState([]);
//   const [filteredUsers, setFilteredUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => {
//         setUsers(data);
//         setFilteredUsers(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       });
//   }, []);

//   const handleFilter = (e) => {
//     const value = e.target.value;
//     setSearch(value);

//     const filtered = users.filter((user) =>
//       user.name.toLowerCase().includes(value.toLowerCase())
//     );

//     setFilteredUsers(filtered);
//   };

//   return (
//     <div className="container">
//       <h1>React API</h1>

//       <input
//         type="text"
//         placeholder="Search users..."
//         value={search}
//         onChange={handleFilter}
//         className="search-box"
//       />

//       {loading ? (
//         <div className="loader"></div>
//       ) : (
//         <div className="card-container">
//           {filteredUsers.map((user) => (
//             <div className="card" key={user.id}>
//               <h3>{user.name}</h3>
//               <p>{user.email}</p>
//               <p>{user.phone}</p>
//               <p>{user.website}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
