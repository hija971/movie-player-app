import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const ListItem = ({ movie }) => {
    const [isHovered, setIsHovered] = useState(false);
    const hoverdRef = useRef(null);

    const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);
    const shareRef = useRef(null);

    const [isLiked, setIsLiked] = useState(false);
    const likeRef = useRef(null);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative cursor-pointer mx-2 ${isHovered ? "transform transition-transform duration-500 ease scale-[1.2] z-50" : ""}`}
        >
            <div className="rounded overflow-hidden">
                <div className={`img-box object-cover ${isHovered ? "" : ""}`}>
                    <img className="w-full" src={movie.imgUrl} alt="" />
                </div>

                <div
                    className={`absolute bottom-0 left-0 w-full bg-gradient-to-t from-black p-4 ${isHovered ? "hidden" : ""}`}
                    ref={hoverdRef}
                >
                    <h5 className="text-xl text-white truncate">
                        <Link to="/">
                            {movie.title}
                        </Link>
                    </h5>
                    <div>
                        <span className="text-xs text-white">{movie.time}</span>
                    </div>
                </div>

                <div
                    className={`absolute flex justify-between w-full ${isHovered ? "top-full py-4" : "hidden"} w-full flex justify-between `}
                >
                    <div className="w-1/2">
                        <h5 className="text-xl text-white truncate">
                            <Link to="/">
                                {movie.title}
                            </Link>
                        </h5>
                        <div>
                            <span className="text-xs text-white">{movie.time}</span>
                        </div>
                    </div>
                    <div className="flex items-center text-xs text-white"><i className="fa-solid fa-plus mx-1"></i>Watchlist</div>
                </div>

                <div
                    className={`block-social-info absolute left-0 bottom-0 w-full flex justify-between items-center p-4 ${isHovered ? "bg-gradient-to-t from-black" : "hidden"}`}
                >
                    <ul
                        className={`flex gap-2 ${isHovered ? "" : "hidden"}`}
                    >
                        <li
                            className="relative flex cursor-pointer"
                            onMouseEnter={() => setIsShareMenuOpen(true)}
                            onMouseLeave={() => setIsShareMenuOpen(false)}
                        >
                            <span className="flex justify-center items-center border rounded-full w-8 h-8 text-white text-xs hover:bg-red-600 hover:border-red-600">
                                <i className="fa-solid fa-share"></i>
                            </span>
                            <ul
                                className={`absolute bottom-full w-full flex flex-col-reverse justify-center items-center text-white bg-gradient-to-b from-black ${isShareMenuOpen ? "" : "hidden"}`}
                                ref={shareRef}
                                onMouseEnter={() => setIsShareMenuOpen(true)}
                                onMouseLeave={() => setIsShareMenuOpen(false)}
                            >
                                <li className="my-1 transform transition-all ease-out duration-300 hover:text-red-600">
                                    <Link>
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </Link>
                                </li>
                                <li className="my-1 transform transition-all ease-out duration-300 hover:text-red-600">
                                    <Link>
                                        <i className="fa-brands fa-twitter"></i>
                                    </Link>
                                </li>
                                <li className="my-1 transform transition-all ease-out duration-300 hover:text-red-600">
                                    <Link>
                                        <i className="fa-solid fa-link"></i>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li
                            className="relative flex flex-col-reverse items-center cursor-pointer"
                            onMouseEnter={() => setIsLiked(true)}
                            onMouseLeave={() => setIsLiked(false)}
                        >
                            <button
                                className="flex justify-center items-center border rounded-full w-8 h-8 text-white text-xs hover:bg-red-600 hover:border-red-600"
                            >
                                <i className="fa-regular fa-heart"></i>
                            </button>
                            <span
                                className={`absolute bottom-full w-full flex justify-center items-center text-white bg-gradient-to-b from-black my-1 ${isLiked ? "" : "hidden"}`}
                                ref={likeRef}
                                onMouseEnter={() => setIsLiked(true)}
                                onMouseLeave={() => setIsLiked(false)}
                            >
                                19
                            </span>
                        </li>
                    </ul>
                    <div
                        className={`rounded-full w-12 h-12 flex justify-center items-center text-md text-white bg-red-600 cursor-pointer `}
                    >
                        <Link>
                            <i className="fa-solid fa-play"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ListItem;