import { useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = ()=>{

    onst [resInfo,setResInfo]=useState(null);

    useEffect(()=>{
        fetchMenu();

    },[])
    const fetchMenu = async ()=>{
        const data = await fetch(
       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9536392&lng=77.695126&restaurantId=581367&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();
        console.log(json);
    };
    if(resInfo===null)return<Shimmer/>

    return (
        <div className="menu">
            <h1>Name Of the Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biriyani</li>
                <li>Burgers </li>
                <li>Diet Coke </li>
                <li> Fried Chiken</li>
            </ul>

        </div>
    )
}
export default RestaurantMenu;