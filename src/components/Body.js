import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
//state variable-super powerful varible
const [listOfRestaurants,setlistofRestaurants]=useState(resList);
 
   
  return (
    <div className="body">
        <div className="filter">
            <button
            className="filter-btn"
           onClick={()=>{
           const filteredList= listOfRestaurants.filter(
            (res)=>{res.data.avgRating > 4
           }
           );
           setlistofRestaurants(filteredList);
           }}
            >
                Top Rated Restaurants
            </button>
        </div>
        
    <div className="res-container">
      {listOfRestaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.data.id} resData={restaurant} />
      ))}
    </div>
    </div>
  );
};

export default Body;