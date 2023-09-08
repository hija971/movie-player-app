import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import { Navigate, BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/movieList/MovieList";
import Product from "./pages/movie/Movie";
import NewProduct from "./pages/newMovie/NewMovie";
import Login from "./pages/login/Login";
import ListManager from "./pages/listManager/listManager";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
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
              <Route path="/movies" element={<ProductList />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/newproduct" element={<NewProduct />} />
              <Route path="/lists" element={<ListManager />} />
              <Route path="/lists/:listId" element={<List />} />
              <Route path="/newList" element={<NewList />} />
            </Routes>
          </div>
        </>
        
      )}
      
    </Router>
  );
}

export default App;
