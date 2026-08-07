import { useState } from "react";
import { useCart } from "./CartContext"
import { Link } from "react-router-dom";


const CartPages = () => {

const {  cartItems,removeFromCart,updateQuantity,cartTotal}= useCart();
const [selectedImage, setSelectedImage] = useState (null)



  return (
    <div className="min-h-screen overflow-x-hidden py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1a120b] via-[#2a1e14]
    to-[#3e2b1d] ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 animate-fade-in-down">
          <span className="font-cinzel block text-5xl sm:text-6xl md:text-7xl mb-2 bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent ">
                Your Cart
          </span>
        </h1>
           {cartItems.length === 0 ? (
            
        <div className="text-center animate-fade-in">
            <p className="text-amber-100/80 text-xl mb-4 ">
            Your Cart is empty
            </p>
            <Link to="/menu" className="transition-all gap-2 hover:gap-3 items-center text-amber-100 inline-flex  duration-300 hover:bg-amber-800/50  bg-amber-900/40 px-6 py-2 rounded-full font-cinzel text-sm uppercase ">
            Browser All Items
            </Link>
        </div>
        
           ) : (
           
           <>
           <div>
            
           </div>
           </> 
          
          )}
      </div>
      
    </div>
  )
}

export default CartPages