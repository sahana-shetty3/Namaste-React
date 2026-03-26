import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"dummy",
                location:"Default",
            },
        };

       
        //console.log("child constructor")
    }

    async componentDidMount(){
        //console.log("parent componentDidMount");
        //api call

        const data = await fetch("https://api.github.com/users/sahana-shetty3");
        const json = await data.json();

        this.setState({
            userInfo:json,
        })

        console.log(json);
    }
    

    render(){
        const {location,name}=this.state.userInfo;
        
        //console.log("child render")


        return(
        <div className="user-card">
            
           
         
            <h2>Name:{name}</h2>
            <h3>Location :{location}</h3>
            </div>
            )
            
        
    }
}
export default UserClass;