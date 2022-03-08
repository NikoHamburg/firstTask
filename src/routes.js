import { Details } from "./pages/Details";
import { Home } from "./pages/Home";

export default {
  root: "home",
  routes: [
    {
      path: "home",
      component: Home,
    },
    {
      path: "details",
      component: Details,
    },
  ],
};
