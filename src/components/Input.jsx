// import React from 'react'

// const Input = () => {
//     function handlechange(e){
//         console.log(e.target.value)
//     }
//   return (
//     <>
//     <input onChange={handlechange}/>
//     </>
//   )
// }

// export default Input

// import React from 'react'
// import { useState } from 'react'

// const Input = () => {
//     const users=[
//         {id:1,name:"ram",city:"kanpur"},
//         {id:2,name:"Rahul",city:"panipat"},
//         {id:3,name:"Siya",city:"nagpur"},
//         {id:4,name:"vishakha",city:"sonipat"},
//     ]
//     const [search,setSearch]=useState("")
//     const filtereduser=users.filter((user)=>user.name.toLowerCase().includes(search.toLowerCase()))
//     console.log(filtereduser)
//   return (
//     <>
//     <input type="text" placeholder="enter your name" value={search} onChange={(e)=>setSearch(e.target.value)}/>
//     {
//         filtereduser.map((user)=>
//             <div key={user.id}>
//                 {user.name}
//             </div>
//         )
//     }
//     </>
//   )
// }

// export default Input