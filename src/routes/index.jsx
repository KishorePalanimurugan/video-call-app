import React from "react";

// // Profile
import UserProfile from "../pages/Authentication/user-profile";

// // Authentication related pages
import Login from "../pages/Authentication/Login";

// // Dashboard
import Dashboard from "../pages/Dashboard/index";
import BoysList from "../pages/Users Management/Boys List/BoysList";
import GirlsList from "../pages/Users Management/Girls list/GirlsList";
import Payments from "../pages/Payments/Payments";

const authProtectedRoutes = [
  //Dashboard
  { path: "/dashboard", component: <Dashboard /> },

  //profile
  { path: "/profile", component: <UserProfile /> },

  //User Management
  { path: "/boys-list", component: <BoysList /> },
  { path: "/girls-list", component: <GirlsList /> },

  //Payments
  { path: "/payments", component: <Payments /> },
];

const publicRoutes = [{ path: "/", component: <Login /> }];

// export { authProtectedRoutes, publicRoutes };
export { authProtectedRoutes, publicRoutes };
