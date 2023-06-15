import "./Header.scss";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
// import jwtDecode from 'jwt-decode';

// import axios from 'axios';
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import Cart from "../Cart/Cart";
import React from "react";
// import {useAuth0} from "@auth0/auth0-react"
import Search from "./Search/Search";
import { Context } from "../../utils/context";
// import { User } from "../../../../backend/Models/User";
// import Cart from "../Cart/Cart";
const Header = (props) => {
    const [scrolled, setScrolled] = useState(false);
    const [showcart, setshowcart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const navigate = useNavigate();
   
    const {cartCount} = useContext(Context);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        }
        else {
            setScrolled(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    const handleLogout = ()=>{
  
        localStorage.removeItem('token');
        navigate("/login")
        props.showAlert("Logout Successfully", "Success")
      }
  
    return(
    <>
     <header className={`main-header ${scrolled ? "sticky-header" : ""} `}>
        <div className="header-content">
            <ul className="left">
                <li onClick={()=>{navigate("/")}}>Home</li>
                
      
                {!localStorage.getItem('token')? <div className="left">
                     <li onClick={()=>{navigate("/login")}} >Login</li>
                <li onClick={()=>{navigate("/signup")}} >SignUp</li>
                <p className="tt">(Not SignIn)</p>
                </div>:<li onClick={handleLogout} > Logout</li>}
                
        
               
            </ul>
            <div className="center" onClick={()=>{navigate("/")}} >
                SHOPEX.
            
            </div>
            <div className="right">
                <TbSearch  onClick={()=> setShowSearch(true)}/>
                <AiOutlineHeart />
                <span

                    className="cart-icon" onClick={()=> setshowcart(true)}
                >

                    <CgShoppingCart 
                     />
                    { !! cartCount && <span>{cartCount}</span>}

                </span>
            </div>
        </div>
    </header>
  { showcart &&  <Cart setshowcart={setshowcart}/>}
{ showSearch && <Search setShowSearch ={setShowSearch}/>}
    </>
    )
};

export default Header;
