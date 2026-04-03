import { LOGO_URL } from "../utils/constants.jsx";
import {useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus.jsx";


const Header = () =>{
    
    const [btnNameReact, setBtnNameReact]=useState("Login");
    console.log("header render");
    const onlineSatus = useOnlineStatus();



    return(
        <div className="flex justify-between bg-pink-400 ">
            <div className="logo-container w-56">
                <img className="w-20" src={LOGO_URL}></img>
            </div>
            <div className ="flex items-center">
                <ul className=" flex p-4 m-4">
                    <li className="px-4">Online status:{onlineSatus ? "✅":"❌"}</li>
                    <li className="px-4">
                       <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                       <Link to="/about">About</Link>
                    </li>
                    <li className="px-4">
                       <Link to="/contact">Contact</Link>
                    </li>
                    <li className="px-4">
                       <Link to="/grocery">Grocery</Link>
                    </li>

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