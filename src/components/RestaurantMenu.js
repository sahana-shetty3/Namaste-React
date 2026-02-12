import { useEffect } from "react"

const RestaurantMenu=()=>{
    const[resInfo,setResInfo]=useState(null);



    useEffect(()=>{
        fetchMenu();

    },[])

    const fetchMenu=async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9536392&lng=77.695126&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        console.log(json);

    }
    return resInfo === null ? (
    <Shimmer/>
     ):(
        <div className="menu">
            <h1>Name of the Restraurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biriyani</li>
                <li>BURGER</li>
                <li>Kabab</li>
            </ul>

        </div>
    )
}

export default RestaurantMenu;
