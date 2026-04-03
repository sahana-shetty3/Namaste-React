import React from "react";
import { CDN_URL } from "../utils/constants.jsx"; 


const RestaurantCard = ({ resData }) => {
  const {
    id,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    cloudinaryImageId,
  } = resData?.info || {};

  return (
    <div className="flex-wrap m-4 p-4 w-[250px] rounded-lg hover:bg-gray-400 bg-gray-100">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL+cloudinaryImageId}   
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines?.join(", ")}</h4> {/* ✅ Added optional chaining */}
      <h4>{avgRating} ⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
