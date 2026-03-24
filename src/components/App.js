import React, { Suspense }  from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
//import About from "./About";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Contact from "./Contact";
import Error from "./Error";
import RestaurantMenu from "./RestaurantMenu";
import { lazy } from "react";
import "../index.css";

const Grocery = lazy(()=>import("./Grocery"));

const About = lazy(()=>import("./About"));

const AppLayout= () =>{
    return(
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    );
};
const appRouter =createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
            path:"/",
            element:<Body/>

            },
            {
            path :"/about",
            element:<Suspense fallback={<h1>loding</h1>} ><About/></Suspense>
            },
            {
            path :"/contact",
            element:<Contact/>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            },
            {
            path :"/grocery",
            element:<Suspense fallback={<h1>loding</h1>} ><Grocery/></Suspense>
            }

        ],
        errorElement:<Error/>

    },
    
]);
const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
