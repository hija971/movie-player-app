import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import MovieList from "./pages/movieList/MovieList";
import Movie from "./pages/movie/Movie";
import NewMovie from "./pages/newMovie/NewMovie";
import Login from "./pages/login/Login";
import ListManager from "./pages/listManager/ListManager.jsx";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";

export default function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        {!user && <Route path="/" element={<Navigate to="/login" />} />}
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      </Routes>
      {user && (
        <>
          <Topbar />
          <div className="container">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/user/:userId" element={<User />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/movies" element={<MovieList />} />
              <Route path="/movie/:movieId" element={<Movie />} />
              <Route path="/newMovie" element={<NewMovie />} />
              <Route path="/lists" element={<ListManager />} />
              <Route path="/list/:listId" element={<List />} />
              <Route path="/newList" element={<NewList />} />
            </Routes>
          </div>
        </>
      )}
    </Router>
  );
}

