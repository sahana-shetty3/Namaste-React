import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu=()=>{
    const[resInfo,setResInfo]=useState(null);

const {resId} = useParams();

    useEffect(()=>{
        fetchMenu();

    },[])

    const fetchMenu=async () =>{
        const data = await fetch(MENU_API+resId);
        const json = await data.json();

        setResInfo(json.data);

    };
    if(resInfo === null)
    return <Shimmer/>;

    const{name,cuisines,costForTwoMessage}=
        resInfo?.cards[0]?.card?.card?.info;

    const{iteamCards} =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log(iteamCards);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(",")}-{costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {iteamCards.map((item)=>(
                    <li>
                        {item.card.info.name}-{"Rs."}
                        {item.card.info.price/100 || item.card.info.defaultPrice/100}
                    </li>
                ))}

              
            </ul>

        </div>
    );
}

export default RestaurantMenu;