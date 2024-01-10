import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Recipie from "./components/Recipie";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux"; 
import store from "./utils/store";


// const Instamart = lazy(() => import("./components/Instamart"));

function App() {
  const [user, setUser] = useState({
    name: "Divyanshu",
    email: "user@example.com",
  });
  useEffect(() => {
    // autheticatation
    //setuser
  });
  return (
    <UserContext.Provider
      value={{
        user: user,
        setUser: setUser,
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
  );
};


export default App;