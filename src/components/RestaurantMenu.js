import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();
    

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
           MENU_API +resId
        );
        const json = await data.json();
        setResInfo(json.data);
    };

    if (!resInfo) return <Shimmer />;

    // ---------- SAFE RESTAURANT INFO ----------
    const restaurantInfo =
        resInfo?.cards?.find(
            (c) => c.card?.card?.info
        )?.card?.card?.info || {};

    const { name, cuisines = [], costForTwoMessage } = restaurantInfo;

    // ---------- SAFE MENU EXTRACTION ----------
    const regularCards =
        resInfo?.cards[2]?.groupedCards?.cardGroupMap?.REGULAR?.cards || [];

    const itemCards =
        regularCards
            .find((c) => c.card?.card?.itemCards)
            ?.card?.card?.itemCards || [];

    return (
        <div className="menu">
            <h1>{name}</h1>

            <p>
                {cuisines.join(", ")} – {costForTwoMessage}
            </p>

            <h2>Menu Items</h2>

            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} — ₹{item.card.info.price / 100}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
