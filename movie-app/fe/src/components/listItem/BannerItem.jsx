import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./bannerItem.css";

const BannerItem = ({ movie, isActive }) => {
    const [isBannerActive, setIsBannerActive] = useState(false);

    useEffect(() => {
        setIsBannerActive(isActive);
    }, [isActive]);

    const starRating = parseFloat(movie.star);
    const fullStars = Math.floor(starRating);
    const hasHalfStar = starRating - fullStars >= 0.5;

    return (
        <div
            className={`bg-cover bg-center min-h-screen ${isBannerActive ? "active" : ""
                }`}
            style={{ backgroundImage: `url(${movie.imgUrl})` }}
        >
            <div className="bg-gradient-to-r from-black/80">
                <div className="container">
                    <div className="grid grid-cols-12 min-h-screen">
                        <div className="lg:col-span-7 md:col-span-12 flex justify-center items-center">
                            <div className={`w-full wrapper ${isActive ? "active" : ""}`}>
                                <h1 className="text-8xl font-extrabold text-white uppercase truncate mb-4 menu-item">{movie.duration}</h1>
                                <div className="flex mb-4 menu-item">
                                    <div className="flex mr-4">
                                        <ul className="flex mr-4">
                                            {Array.from({ length: fullStars }, (_, index) => (
                                                <li className="mr-1 text-yellow-500" key={index}>
                                                    <i className="fa-solid fa-star"></i>
                                                </li>
                                            ))}
                                            {hasHalfStar && (
                                                <li className="mr-1 text-yellow-500">
                                                    <i className="fa-solid fa-star-half"></i>
                                                </li>
                                            )}
                                        </ul>
                                        <span className="text-white">{movie.star}</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-300">{movie.time}</span>
                                    </div>
                                </div>
                                <p className="text-white w-full mb-8 menu-item">{movie.description}</p>
                                <div className="mb-8 menu-item">
                                    <div className="text-lg font-medium text-red-600 my-2">
                                        Genres <span className="text-white font-normal"><Link to=""><span>Action</span></Link> , <Link to=""><span>Adventure</span></Link></span>
                                    </div>
                                    <div className="text-lg font-medium text-red-600 my-2">
                                        Tags <span className="text-white font-normal"><Link to=""><span>Action</span></Link> , <Link to=""><span>Adventure</span></Link></span>
                                    </div>
                                </div>
                                <div className="menu-item">
                                    <Link className="rounded bg-red-600 text-white py-3 px-10 hover:bg-red-500" to=""><i class="fa-solid fa-play"></i> PLAY NOW</Link>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-5 md:col-span-12 flex justify-center items-center">
                            <Link to="" className="flex items-center text-white">
                                <span className="flex justify-center items-center w-24 h-24 border-4 rounded-full text-4xl mr-4 hover:animate-spin hover:border-red-500"><i className="fa-solid fa-play"></i></span>
                                <span className="text-2xl">WATCH TRAILER</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerItem;