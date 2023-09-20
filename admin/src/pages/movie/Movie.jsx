import "./movie.css";
import { storage, ref, uploadBytesResumable, getDownloadURL } from "../../firebase";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Publish } from "@material-ui/icons";
import { useContext, useState } from "react";
import { updateMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";

export default function Movie() {
  const location = useLocation();
  const movie = location.state?.movie;
  const navigate = useNavigate();
  const { dispatch } = useContext(MovieContext);

  const [updatedMovie, setUpdatedMovie] = useState({
    title: "",
    year: "",
    genre: "",
    limit: "",
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
          setUpdatedMovie((prev) => {
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
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
        <Link to="/newMovie">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={movie.img} alt="" className="productInfoImg" />
            <span className="productName">{movie.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{movie._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{movie.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">year:</span>
              <span className="productInfoValue">{movie.year}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">limit:</span>
              <span className="productInfoValue">{movie.limit}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Movie Title</label>
            <input
              type="text"
              id="title"
              placeholder={movie.title}
              onChange={(e) =>
                setUpdatedMovie({ ...updatedMovie, title: e.target.value })
              }
            />
            <label>Year</label>
            <input
              type="text"
              id="year"
              placeholder={movie.year}
              onChange={(e) =>
                setUpdatedMovie({ ...updatedMovie, year: e.target.value })
              }
            />
            <label>Genre</label>
            <input
              type="text"
              id="genre"
              placeholder={movie.genre}
              onChange={(e) =>
                setUpdatedMovie({ ...updatedMovie, genre: e.target.value })
              }
            />
            <label>Limit</label>
            <input
              type="text"
              id="limit"
              placeholder={movie.limit}
              onChange={(e) =>
                setUpdatedMovie({ ...updatedMovie, limit: e.target.value })
              }
            />
            <label>Trailer</label>
            <input
              type="file"
              id="trailer"
              placeholder={movie.trailer}
              onChange={(e) => handleUpload(e, "trailer")}
            />
            <label>Video</label>
            <input
              type="file"
              id="video"
              placeholder={movie.video}
              onChange={(e) => handleUpload(e, "video")}
            />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={movie.img} alt="" className="productUploadImg" />
              <label for="img">
                <Publish />
              </label>
              <input
                type="file"
                id="img"
                style={{ display: "none" }}
                onChange={(e) => handleUpload(e, "img")}
              />
            </div>
            <button
              className="productButton"
              onClick={() => {
                updateMovie(movie._id, updatedMovie, dispatch);
                navigate("/movies");
              }}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
