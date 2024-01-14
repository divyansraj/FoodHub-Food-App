import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import UserContext from "./utils/UserContext";
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

const Instamart = lazy(() => import("./components/Instamart"));

const appRouter = createBrowserRouter([
  {
    path: "/FoodHub-Food-App",
    errorElement: <Error />,
    element: <App />,
    children: [
      {
        index: true,
        element: <Body />,
      },
      {
        path: "about", // Relative path without the leading '/'
        element: <About />,
        children: [
          {
            index: true,
            element: <Profile />,
          },
        ],
      },
      {
        path: "contact", // Relative path without the leading '/'
        element: <Contact />,
      },
      {
        path: "recipes", // Relative path without the leading '/'
        element: <Recipie />,
      },
      {
        path: "restaurant/:id", // Relative path without the leading '/'
        element: <RestaurantMenu />,
      },
      {
        path: "instamart", // Relative path without the leading '/'
        element: (
          <Suspense fallback={<h1>Loading InstaMart... ...</h1>}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

reportWebVitals();