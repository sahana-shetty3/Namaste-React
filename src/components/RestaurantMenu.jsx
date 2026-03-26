import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.jsx";


const RestaurantMenu=()=>{
    

const {resId} = useParams();

const resInfo = useRestaurantMenu(resId);

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