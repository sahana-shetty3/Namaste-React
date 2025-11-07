import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState ,useEffect} from "react";

const Body = () => {
//state variable-super powerful varible
const [listOfRestaurants,setlistofRestaurants]=useState(resList);

useEffect(()=>{
  fetchData();
},[]);
 
const fetchData= async ()=>{

  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9536392&lng=77.695126&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
const json = await data.json();
console.log(json.info.id.name);

};
   
  return (
    <div className="body">
        <div className="filter">
            <button
            className="filter-btn"
           onClick={()=>{
           const filteredList= listOfRestaurants.filter(
            (res)=>{ return res.data.avgRating > 4.4
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