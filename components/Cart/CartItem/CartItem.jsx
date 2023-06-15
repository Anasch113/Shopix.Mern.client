import "./CartItem.scss";
import prod1 from "../../../assets/products/earbuds-prod-1.webp"
import { MdClose } from "react-icons/md";
import { useContext } from "react";
import { Context } from "../../../utils/context";

import React from "react";
const CartItem = () => {
    const {cartItems,handleCartProductQuantity,handleRemoveFromCart}= useContext(Context)
    return <div className="cart-products"> 
    {cartItems.map((item)=>(
        <div key={item.id} className="cart-product">
        <div className="image-container">
            <img src={ process.env.REACT_APP_DEV_URL +
                                item.attributes.img.data[0].attributes.url} alt="" />

        </div>
        
        <div className="prod-details">
            <span className="name"> {item.attributes.title}</span>
            <MdClose className="close-btn" 
            onClick={()=>{handleRemoveFromCart(item)}}/>
            <div className="quantity-buttons">
                        <span onClick={()=>{handleCartProductQuantity("dec", item)}} >-</span>
                        <span >{item.attributes.quantity}</span>
                        <span onClick={()=>{handleCartProductQuantity("inc", item)}}>+</span>
                    </div>
                    <div className="text">
                        <span>{item.attributes.quantity}</span>
                        <span>x</span>
                        <span>RS {item.attributes.price}</span>
                    </div>
        </div>
    </div>
    ))}
     
    
    </div>;
};

export default CartItem;
