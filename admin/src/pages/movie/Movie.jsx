import { Link, useLocation, useNavigate } from "react-router-dom";
import "./movie.css";
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
    trailer: null,
    video: null,
    img: null
  });
  
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
              placeholder={movie.title}
              onChange={(e) =>
                setUpdatedMovie({ ...updatedMovie, title: e.target.value })
              }
            />
            <label>Year</label>
            <input
              type="text"
              placeholder={movie.year}
              onChange={(e) =>
                setUpdatedMovie({ ...updatedMovie, year: e.target.value })
              }
            />
            <label>Genre</label>
            <input
              type="text"
              placeholder={movie.genre}
              onChange={(e) =>
                setUpdatedMovie({ ...updatedMovie, genre: e.target.value })
              }
            />
            <label>Limit</label>
            <input
              type="text"
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
              onChange={(e) =>
                setUpdatedMovie({ ...updatedMovie, trailer: e.target.files[0] })
              }
            />
            <label>Video</label>
            <input
              type="file"
              id="video"
              placeholder={movie.video}
              onChange={(e) =>
                setUpdatedMovie({ ...updatedMovie, video: e.target.files[0] })
              }
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
                onChange={(e) =>
                  setUpdatedMovie({ ...updatedMovie, img: e.target.files[0] })
                }
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
