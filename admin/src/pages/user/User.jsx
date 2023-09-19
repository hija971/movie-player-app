import { Publish } from "@material-ui/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { updateUser } from "../../context/userContext/apiCalls";
import { UserContext } from "../../context/userContext/UserContext";
import "./user.css";

export default function User() {
  const location = useLocation();
  const user = location.state?.user;
  const navigate = useNavigate();
  const { dispatch } = useContext(UserContext);

  const [updatedUser, setUpdatedUser] = useState({
    username: "",
    email: "",
    password: "",
    isAdmin: false,
    profilePic: null
  });
  
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder={user.username}
                  className="userUpdateInput"
                  onChange={(e) =>
                    setUpdatedUser({ ...updatedUser, username: e.target.value })
                  }
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder={user.email}
                  className="userUpdateInput"
                  onChange={(e) =>
                    setUpdatedUser({ ...updatedUser, email: e.target.value })
                  }
                />
              </div>
              <div className="userUpdateItem">
                <label>Password</label>
                <input
                  type="text"
                  placeholder={user.password}
                  className="userUpdateInput"
                  onChange={(e) =>
                    setUpdatedUser({ ...updatedUser, password: e.target.value })
                  }
                />
              </div>
              <div className="userUpdateItem">
                <label>Is Admin</label>
                <select
                  className="userUpdateInput"
                  onChange={(e) =>
                    setUpdatedUser({ ...updatedUser, isAdmin: e.target.value })
                  }
                >
                  <option value="true">true</option>
                  <option value="false">false</option>
                </select>
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img className="userUpdateImg" src={user.profilePic} alt="" />
                <label htmlFor="img">
                  <Publish className="userUpdateIcon" />
                </label>
                <input
                  type="file"
                  id="img"
                  style={{ display: "none" }}
                  onChange={(e) =>
                    setUpdatedUser({ ...updatedUser, profilePic: e.target.files[0] })
                  }
                />
              </div>
              <button
                className="userUpdateButton"
                onClick={() => {
                  updateUser(user._id, updatedUser, dispatch);
                  navigate("/users");
                }}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
