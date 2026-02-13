import {useState,useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body= () =>{
  const [listOfRestaurant,setListOfRestaurant] = useState([]);

  const [filteredRestaurant,setFilteredRestaurant] = useState([]);

  const [searchText,setSearchText] = useState([]);
  
  useEffect(()=>{
    fetchData();
},[])

  const fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9536392&lng=77.695126&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();

    setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  };
  
  return listOfRestaurant.length === 0 ?(
    <Shimmer/>

  ) :(
    <div className="container-body">
      <div className="filter-btn">
        <div className="search">
          <input type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}/>
          <button
          className="searchBtn"
          onClick={() =>{
            const filteredRestaurant = listOfRestaurant.filter((res) =>{
              return res.info.name.toLowerCase()
              .includes(searchText.toLowerCase());
            });
            setFilteredRestaurant(filteredRestaurant);
          }}
          >
            search
          </button>
        </div>
        <button 
        onClick={
          () => {
            const filterLogic = listOfRestaurant.filter((res) =>{
              return res.info.avgRating > 4;
            });
            setFilteredRestaurant(filterLogic);
          }
        }
        >
          Top Restaurant
        </button>
      </div>
      <div className="RestaurantContainer">
        {
          filteredRestaurant.map((restaurant) =>(
            <Link key={restaurant.info.id}
            to={"/restaurants/"+restaurant.info.id}>
            <RestaurantCard resData={restaurant}/>
            </Link>
          ))
        }
      </div>
    </div>
  );

  
};
export default Body;