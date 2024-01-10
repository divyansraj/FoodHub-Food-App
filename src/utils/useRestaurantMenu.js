import { useState, useEffect } from "react";
const useRestaurantMenu = (id) => {
  const [restaurant, setRestaurant] = useState([]);
  const [resTempMenu, setResTempMenu] = useState([]);
  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9639423&lng=77.7125085&restaurantId=" +
        id
    );
    const json = await data.json();
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    setResTempMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
    console.log(json?.data);
  }

  return {
    restaurant,
    resTempMenu,
    setResTempMenu
  };
};

export default useRestaurantMenu;
