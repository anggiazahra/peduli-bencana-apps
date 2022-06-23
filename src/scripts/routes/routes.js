/* eslint-disable quotes */
import Home from "../views/pages/home";
import Login from "../views/pages/login";
import Register from "../views/pages/register";
import Leadingpage from "../views/pages/leading-page";

const routes = {
  "/": Login, // default page
  "/home": Home,
  "/login": Login,
  "/register": Register,
  "/leading-page": Leadingpage,
};

export default routes;
