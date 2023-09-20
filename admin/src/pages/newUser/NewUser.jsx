import "./newUser.css";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../context/userContext/apiCalls";
import { UserContext } from "../../context/userContext/UserContext";
import { createUser } from "../../context/userContext/apiCalls";

export default function NewUser() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const { dispatch } = useContext(UserContext);
  const { dispatch: dispatchUser } = useContext(UserContext);

  useEffect(() => {
    getUsers(dispatchUser);
  }, [dispatchUser]);

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(user, dispatch);
    navigate("/users");
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input
            type="text"
            placeholder="john"
            name="username"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            type="email"
            placeholder="john@gmail.com"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Is Admin</label>
          <select
            className="newUserSelect"
            name="isAdmin"
            onChange={handleChange}
          >
            <option value="true">true</option>
            <option value="false">false</option>
          </select>
        </div>
        <button className="newUserButton" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}
