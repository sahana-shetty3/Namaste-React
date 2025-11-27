import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import About from "./About";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Contact from "./Contact";
import Error from "./Error";
import RestaurantMenu from "./RestaurantMenu";
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
            element:<About/>
            },
            {
            path :"/contact",
            element:<Contact/>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>

    },
    
]);
const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
