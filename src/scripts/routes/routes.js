import Home from "../views/pages/home";
import Login from "../views/pages/login";
import Register from "../views/pages/register";

const routes = {
  "/": Login, // default page
  "/home": Home,
  "/login": Login,
  "/register": Register,
};

export default routes;
