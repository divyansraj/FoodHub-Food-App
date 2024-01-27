import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { swiggy_menu_api_URL } from "../config";
const useRestaurantMenu = (id) => {
  const [restaurant, setRestaurant] = useState([]);
  const [resTempMenu, setResTempMenu] = useState([]);
  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(
      swiggy_menu_api_URL 
      + id
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
