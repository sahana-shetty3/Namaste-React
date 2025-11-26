import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import About from "./About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./Contact";
import Error from "./Error";
const AppLayout= () =>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
};
const appRouter =createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>
    },
    {
        path :"/about",
        element:<About/>
    },
     {
        path :"/contact",
        element:<Contact/>
    },
]);
const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
