
import UserClass from "src/UserClass.jsx";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("parent constructor")
    }

    componentDidMount(){
        console.log("parent componentDidMount");
    }
    render(){
         console.log("parent render")
        return(
            
            <div>
            <h1>About</h1>
            <h2>This is Namaste React Web series</h2>
            
            <UserClass name={"swapna{class}"}location={"udupi"}/>
        </div>

        )
    }
}


export default About;