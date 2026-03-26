import { useState } from "react";

const User =(props)=>{
    const [count,setCount] =useState(0);
    const [count2] = useState(1);
    return( <div className="user-card">
        <h1>Count:{count}</h1>
        <h1>Count:{count}</h1>
        <h2>Name:{props.name}</h2>
        <h2>Location Udupi</h2>
    </div>
);

};
export default User;