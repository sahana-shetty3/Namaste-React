import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, [resId]);

  const fetchData = async () => {
    try {
      const data = await fetch(MENU_API + resId);

      if (!data.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await data.json();

      console.log("Menu Data", json);

      setResInfo(json?.data);

    } catch (error) {
      console.log("Error fetching menu:", error);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;