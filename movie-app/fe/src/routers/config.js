import Home from "../pages/home/Home.jsx";
import Login from "../pages/login/Login.jsx";
import MoviePage from "../pages/movie/MoviePage.jsx";
import Register from "../pages/register/Register.jsx";
import ShopPage from "../pages/shop/ShopPage.jsx";
import TvShowPage from "../pages/tvshow/TvShow.jsx";

export const routes = [
  {
    path: "/",
    component: <Home />,
    notAuth: false,
  },
  {
    path: "/login",
    component: <Login />,
    notAuth: true,
  },
  {
    path: "/register",
    component: <Register />,
    notAuth: true,
  },
  {
    path: "/movies",
    component: <MoviePage />,
    notAuth: true,
  },
  {
    path: "/tv-shows",
    component: <TvShowPage />,
    notAuth: true,
  },

  {
    path: "/shop",
    component: <ShopPage />,
    notAuth: true,
  },
];
export default routes;
