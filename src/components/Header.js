import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";

const Header = () =>{
    
    const [btnNameReact, setBtnNameReact]=useState("Login");
    console.log("header render");
    const onlineSatus = useOnlineStatus();



    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className ="nav-items">
                <ul>
                    <li>Online status:{onlineSatus}"✅":"❌"</li>
                    <li>
                       <Link to="/">Home</Link>
                    </li>
                    <li>
                       <Link to="/about">About</Link>
                    </li>
                    <li>
                       <Link to="/contact">Contact</Link>
                    </li>
                    <li>Cart</li>

                    <button className="login" 
                    onClick={()=>{
                    btnNameReact ==="Login"
                    ? setBtnNameReact("Logout")
                    :setBtnNameReact("Login");
                        
                    }}
                    >
                     {btnNameReact}
                    </button>

                </ul>
            </div>
        </div>
    );
};
export default Header;