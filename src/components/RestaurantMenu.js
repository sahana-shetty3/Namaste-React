import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/menu");

      if (!res.ok) throw new Error(`Backend returned ${res.status}`);

      const json = await res.json();
      console.log("MENU DATA:", json);

      setResInfo(json);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  if (!resInfo) return <Shimmer />;

  // Restaurant basic info
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[0]?.card?.card?.info || {};

  // Menu categories
  const regularCards =
    resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>

      <h2>Menu</h2>

      {regularCards.map((category, index) => {
        const itemCards = category?.card?.card?.itemCards || [];

        if (!itemCards.length) return null;

        const categoryName =
          category?.card?.card?.title || `Category ${index + 1}`;

        return (
          <div key={index} className="menu-category">
            <h3>{categoryName}</h3>
            <ul>
              {itemCards.map((item) => (
                <li key={item.card.info.id}>
                  {item.card.info.name} - ₹
                  {(item.card.info.price || item.card.info.defaultPrice) / 100}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;

