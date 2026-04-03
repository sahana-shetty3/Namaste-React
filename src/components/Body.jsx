import {useState,useEffect} from "react";
import RestaurantCard from "./RestaurantCard.jsx";
import Shimmer from "./Shimmer.jsx";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus.jsx";


const Body= () =>{
  const [listOfRestaurant,setListOfRestaurant] = useState([]);

  const [filteredRestaurant,setFilteredRestaurant] = useState([]);

  const [searchText,setSearchText] = useState("");
  
  useEffect(()=>{
    fetchData();
},[])

  const fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9536392&lng=77.695126&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();

    setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  };

  const onlineSatus = useOnlineStatus();

  if(onlineSatus=== false) 
    return(
    <h1>looks like you are offline </h1>
  );

  
  return listOfRestaurant.length === 0 ?(
    <Shimmer/>

  ) :(
    <div className="container-body">
      <h1 className="text-red-500 text-5xl">TAILWIND WORKING 🚀</h1>
      <div className="filter-btn">
        <h1 className="text-red-500 text-3xl">TEST</h1>
        <div className="search m-4 p-4">
          <input type="text"
          className="search-box border-solid border-red-500 rounded-lg"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}/>
          <button
          className="searchBtn px-4 py-2 bg-green-500 m-4 rounded-lg"
          onClick={() =>{
            const filteredRestaurant = listOfRestaurant.filter((res) =>{
              return  res.info.name.toLowerCase()
              .includes(searchText.toLowerCase());
            });
            setFilteredRestaurant(filteredRestaurant);
          }}
          >
            search
          </button>
        </div>
        <button 
        className=" px-4 py-2 bg-gray-100"
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
      <div className="flex-wrap">
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