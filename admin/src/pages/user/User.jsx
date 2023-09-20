import "./user.css";
import { Publish } from "@material-ui/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { storage, ref, uploadBytesResumable, getDownloadURL } from "../../firebase";
import { updateUser } from "../../context/userContext/apiCalls";
import { UserContext } from "../../context/userContext/UserContext";

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
  });

  const upload = (file, label) => {
    const fileName = new Date().getTime() + label + file.name;
    const storageRef = ref(storage, `/items/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Uploaded ${progress}% done`);
      },
      (error) => {
        console.log(error);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setUpdatedUser((prev) => {
            return { ...prev, [label]: downloadURL };
          });
        } catch (error) {
          console.log(error);
        }
      }
    );
  };

  const handleUpload = (e, label) => {
    e.preventDefault();
    if (e.target.files[0]) {
      upload(e.target.files[0], label);
    }
  };
  
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
                  <option value={true}>true</option>
                  <option value={false}>false</option>
                </select>
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img className="userUpdateImg" src={user.profilePic} alt="" />
                <label htmlFor="profilePic">
                  <Publish className="userUpdateIcon" />
                </label>
                <input
                  type="file"
                  id="profilePic"
                  style={{ display: "none" }}
                  onChange={(e) => handleUpload(e, "profilePic")}
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
