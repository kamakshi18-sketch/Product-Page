import React from 'react'
import { useState } from 'react'
// import AddToCart from './AddToCart'

const products=[
    {id:1,tittle:"Panna Cotta",category:"dessert",rating:4.9,stock:15,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdMSgbca-F1CGrVi6zVhs5Nxa3yQ-i2IpPpL5z0mLHWgBC74sW1d3JdKUc&s=10",
    description:"Panna Cotta is that wonderful Italian milk custard.",
    quantity:0},

    {id:2,tittle:" Ultimate Veggie Pizza",category:"savoury",rating:4.8,stock:15,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSNTYHxwiTaDM-2pUGBuop2GVvif6C3jRm7g-ZcaCnwuvVFjfe_qaLxYA2&s=10",
    description:"The Ultimate Veggie Pizza fully loaded with veggies",
    quantity:0},

    {id:3,tittle:"Red Velvet Cheesecake",category:"dessert",rating:5,stock:10,
    image:"https://www.recipetineats.com/tachyon/2025/07/Red-velvet-cheesecake_5.jpg?resize=1200%2C1500&zoom=0.54",
    description:"This is a cheesecake that has an Oreo base and an red velvet coloured cheesecake filling.",
    quantity:0},

    {id:4,tittle:"Creamy Vegetable Pasta",category:"savoury",rating:4.5,stock:15,
    image:"https://www.kitchensanctuary.com/wp-content/uploads/2020/04/Vegetable-Pasta-Bake-Square-FS-19.jpg",
    description:"A veggie packed dinner that even the meat-eaters will devour",
    quantity:0},

    {id:5,tittle:"Vegetable Sandwich",category:"savoury",rating:4.5,stock:15,
    image:"https://shwetainthekitchen.com/wp-content/uploads/2020/08/IMG_9973.jpg",
    description:"This creamy vegetable sandwich is an lightweight food",
    quantity:0},

    {id:6,tittle:"Mini cinnamon muffins",category:"dessert",rating:5,stock:15,
    image:"https://www.recipetineats.com/tachyon/2025/08/Mini-cinnamon-muffins_7.jpg?resize=1200%2C1500&zoom=0.54",
    description:"These mini cinnamon muffins are an delicious!"},

    {id:7,tittle:"Rainbow Breeze Mocktail",category:"drinks",rating:4.6,stock:15,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUF_GXoeMSIky-YyZA7rSNG-PaaUQIhrTGmhMNZTShytOJJMB_5p9VcSjE&s=10",
    description:"Summer beverage filled with splash of color and fun.",
    quantity:0},

    {id:8,tittle:"Grilled Sandwich",category:"savoury",rating:4,stock:15,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzKCARsLidQKlEFvS35oEammi_Sx9ldr4Ae6ixtj-CqmjF99tS0Q6eykH9&s=10",
    description:"sizzling grilled shandwich with creamy sauce",
    quantity:0},

    {id:9,tittle:"Strawberry Iced Mocktail",category:"drinks",rating:4.7,stock:15,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFLMF7uS-m-DyoXtzfywWRCAxQukxzEXpZqqt5PJJPlMyh_xzhZz2h7vu4&s=10",
    description:"refreshing strawberry mocktails to truly like the strawbeery season",
    quantity:0},

    {id:10,tittle:"Cold Coffee",category:"drinks",rating:4.5,stock:15,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwdfAS3X9VYhPgkih1aNtabwxwdteMnSNDEKRPI7oe91tPgkmmtToXv-F&s=10",
    description:"Frothy creamy cold coffee",
    quantity:0},

    {id:11,tittle:"Coffee",category:"drinks",rating:4.5,stock:15,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAL0UL7yVN1igLBJkhhRsR6MyhEBFBv9bVsXLAoduBT7eoK6Y4mOWvWjfv&s=10",
    description:"hot coffee",
    quantity:0},

    {id:12,tittle:"Masala Chai",category:"drinks",rating:4.8,stock:15,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYUtgFixVWfa8H6L8Hsp2JU7ARnjG6bcQM6Xi6bSeydunXsvozai4Xp8Mm&s=10",
    description:"Kadak masala chai to the rescue",
    quantity:0}
]

const MainLoading = ({cart, setCart,search}) => {
        const[prodlist,setProdlist]=useState(products)
        function increaseQuantity(id){
            const updatedProducts=prodlist.map((product)=>{
                if(product.id===id && product.quantity<product.stock){
                    return{...product,quantity:product.quantity+1}
                }
                return product
            })
            setProdlist(updatedProducts)
        }
        function addtocart(product){
                setCart([...cart,product])
            }
                const filteredproduct=products.filter((product)=>product.tittle.toLowerCase().includes(search.toLowerCase()))
                console.log(filteredproduct)

  return (
    <div style={{
        display:"flex",
        gap:"20px",
        flexWrap:"wrap",
        justifyContent:"center",
        padding:"20px",
        width:"100%"
    }}>
        {
            // prodlist.map((product)=>(
               filteredproduct.map((product)=>(
            <div key={product.id} style={{border:"3px solid black",
                padding:"10px",
                overflow:"hidden",
                boxShadow:"0px 2px 10px black",
                borderRadius:"10px",
                width: "290px",
                height:"600px"
            }}>
                <img src={product.image} style={{width: "250px", height: "300px"}}/>
                <h2>{product.tittle}</h2>
                <p>
                    <strong>Category:</strong>{product.category}
                </p>
                <p>{product.description}</p>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <span>{product.rating}</span>
                    <span>{product.stock}</span>
                </div>
                <br/>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <span>Quantity:{product.quantity}</span>
                <button style={{width:"15%",
                    padding:"10px",
                    backgroundColor:"black",
                    color:"white",
                    border:"none",
                    borderRadius:"5px",
                    cursor:"pointer"}} 
                    onClick={()=>increaseQuantity(product.id)}>
                        +
                    </button>
                </div>
                    <br/>
                    {/* <p>Stock: {product.stock}</p> */}
                <button style={{
                    width:"50%",
                    padding:"10px",
                    backgroundColor:"black",
                    color:"white",
                    border:"none",
                    borderRadius:"5px",
                    cursor:"pointer"

                }}onClick={()=>addtocart(product)}>
                    Add to Cart
                </button>
                {/* <AddToCart cart={cart} setCart={setCart}/> */}
            </div>))
        }
    </div>
  )
}

export default MainLoading