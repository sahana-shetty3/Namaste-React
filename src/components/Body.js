import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer  from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // state variable to store restaurant data
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const[filteredRestaurant,setFilteredRestaurant]=useState([]);

  const [searchText,setSearchText]=useState("");

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9536392&lng=77.695126&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(); 

    
    const restaurantList =
      json?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    setListOfRestaurants(restaurantList);

    const restaurantList2 =
      json?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    setFilteredRestaurant(restaurantList2);
  };

  return  listOfRestaurants.length ===0 ?(
    <Shimmer/>
  ):(
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="serach-box" value={searchText} 
           onChange={(e)=>{
            setSearchText(e.target.value);
           
           }}
           />
          <button
          onClick={()=>
            {
              console.log(searchText);
             const filteredRestaurant = listOfRestaurants.filter(
              (res)=>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant);
           } }
           >
            Search
            </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.1
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
         <Link
          key={restaurant.info.id}
          to = {"/restaurants"+restaurant.info.id}>
          <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
