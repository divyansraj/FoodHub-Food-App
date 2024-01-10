import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
const loggedInUser = () => {
  //authetication api
  return true;
};

const Title = () => {
  return (
    <a href="/">
      <img
        className=" w-48 "
        src="https://foodhub.modeltheme.com/wp-content/themes/foodhub/images/logo.png"
        alt="logo"
      />
    </a>
  );
};

const Header = () => {
  const {user} = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isonline = useOnline();
  
  return (
    <div className="header">
      <div className="bg-[#0b1419] flex justify-between items-center p-4 px-10">
        <Title />
        <div>
          <ul className="nav-items flex text-white p-1">
            <li className=" m-2 font-medium cursor-pointer  ">
              <Link to="/">Home</Link>
            </li>
            <li className=" m-2 font-medium cursor-pointer  ">
            <Link to="/recipes">Recipes</Link></li>
            {/* <li className=" m-2 font-medium cursor-pointer  ">Pages</li>
            <li className=" m-2 font-medium cursor-pointer  ">Blog</li> */}
            <li className=" m-2 font-medium cursor-pointer  ">
              <Link to="/contact">Contact</Link>
            </li>
            <li className=" m-2 font-medium cursor-pointer  ">
              <Link to="/about">About</Link>
            </li>
            <li className=" m-2 font-medium cursor-pointer  ">
              <Link to="/instamart">InstaMart</Link>
            </li>
            <li className=" m-2 font-medium cursor-pointer  ">Cart</li>
            {/* <button className="btn">Submit Recipe</button> */}
          </ul>
        </div>
        <h1 className="font-bold">{user.name} - {user.email}   </h1>
        <div className=" w-52 flex justify-center items-center gap-5">
        {isLoggedIn ? (
          <button
            className="py-1 px-5 rounded-sm border-2 border-solid border-gray-500 text-white bg-transparent   "
            onClick={() => setIsLoggedIn(false)}
          >
          LogIn
          </button>
        ) : (
          <button
            className="py-1 px-3 rounded-sm border-2 border-solid border-gray-500 text-white bg-transparent   "
            onClick={() => setIsLoggedIn(true)}
          >
            LogOut
          </button>
        )}
        <div>{isonline ? "📶" : " ⛔"}</div>
        </div>
        
      </div>

      <div
        className="bg-[url(https://foodhub.modeltheme.com/wp-content/uploads/2020/02/foodhub-slider-main-food-v4.jpg?id=20741)]
        bg-cover bg-no-repeat h-[50vh] overflow-hidden flex flex-row gap-12 justify-center items-center leading-10 text-white  "
      >
        <div className="hero-section-left">
          <h1 className=" text-3xl font-semibold">It is even better than</h1>
          <h1 className=" text-3xl font-semibold">
            an expensive cookery book{" "}
          </h1>
          <p>Learn how to make your favorite restaurant’s dishes</p>
        </div>
        <div className="hero-section-right">
          <div className="flex">
            <input
              type="text"
              className=" rounded-l-2xl py-1 px-3 border-2 border-solid outline-none text-black bg-white "
              placeholder="I want to make..."
            ></input>
            <button className="rounded-r-2xl py-1 px-3 border-2 border-solid  text-white bg-transparent ">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
