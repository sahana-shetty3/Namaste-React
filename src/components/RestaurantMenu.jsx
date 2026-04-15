import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) return <Shimmer />;

  // Restaurant Info
  const restaurantInfo =
    resInfo?.cards?.find(
      (card) => card?.card?.card?.info
    )?.card?.card?.info;

  // Categories (Correct Path)
  const categories =
    resInfo?.cards
      ?.find((card) => card?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.filter(
        (c) =>
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

  console.log("Categories", categories);

  return (
    <div className="menu">
      <h1>{restaurantInfo?.name}</h1>

      <p>
        {restaurantInfo?.cuisines?.join(", ")} -
        {restaurantInfo?.costForTwoMessage}
      </p>

      <h2>Menu</h2>

      {categories?.map((category) => (
        <div key={category?.card?.card?.title}>
          <h3>{category?.card?.card?.title}</h3>

          <ul>
            {category?.card?.card?.itemCards?.map((item) => (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name} - ₹
                {(item?.card?.info?.price ||
                  item?.card?.info?.defaultPrice) / 100}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;