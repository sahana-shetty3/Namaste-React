import { useEffect, useState } from "react"

const useOnlineStatus = () =>{
    //check if online

    const [onlineSatus,setOnlineStatus] = useState(true);

    useEffect(() =>{
        window.addEventListener("offline",() =>{
            setOnlineStatus(false)
        })

        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        })
    },[]);
    return onlineSatus;

};
export default useOnlineStatus;