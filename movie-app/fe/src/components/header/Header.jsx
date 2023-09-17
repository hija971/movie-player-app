import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext/AuthContext.js";

const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isUserOpen, setIsUserOpen] = useState(false);
    const [search, setSearch] = useState("");

    const navigate = useNavigate();
    const headerRef = useRef(null);

    const { auth, handleLogout } = useContext(AuthContext);

    const toggleSearchDropdown = () => {
        setIsSearchOpen(!isSearchOpen);
        setIsUserOpen(false);
    };

    const toggleUserDropdown = () => {
        setIsUserOpen(!isUserOpen);
        setIsSearchOpen(false);
    };

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleLogoutClick = async () => {
        await handleLogout();
        localStorage.removeItem("accessToken");
        navigate("/login");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (headerRef.current && !headerRef.current.contains(event.target)) {
                setIsSearchOpen(false);
                setIsUserOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <header className="fixed w-full bg-black/50 backdrop-blur backdrop-filter-blur-md z-10" ref={headerRef}>
            <div className="container">
                <div className="py-4">
                    <nav className="flex justify-between items-center">
                        <Link to="/">
                            <img src="" alt="logo" />
                        </Link>
                        <div>
                            <ul className="flex">
                                <li className="text-lg text-white mr-8 hover:text-red-600 transition ease-in">
                                    <Link to="/">HOME</Link>
                                </li>
                                <li className="text-lg text-white mr-8 hover:text-red-600 transition ease-in">
                                    <Link to="/movies">MOVIES</Link>
                                </li>
                                <li className="text-lg text-white mr-8 hover:text-red-600 transition ease-in">
                                    <Link to="/tv-shows">TV SHOWS</Link>
                                </li>
                                <li className="text-lg text-white mr-8 hover:text-red-600 transition ease-in">
                                    <Link to="/videos">VIDEOS</Link>
                                </li>
                                <li className="text-lg text-white hover:text-red-600 transition ease-in">
                                    <Link to="/shop">SHOP</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="relative flex items-center">
                                <li className="relative flex flex-row-reverse items-center text-white mr-4">
                                    <button onClick={toggleSearchDropdown}>
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                    {isSearchOpen && (
                                        <div className="absolute shadow-md">
                                            <form className="flex border">
                                                <input
                                                    type="text"
                                                    className="py-2 px-3 bg-transparent text-white focus:outline-none"
                                                    value={search}
                                                    onChange={handleSearchChange}
                                                    placeholder="Search..."
                                                />
                                                <button
                                                    type="submit"
                                                    className="bg-gray-200 text-gray-800 px-3"
                                                    onSubmit={handleSubmit}
                                                    disabled={!search}
                                                >
                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                </button>
                                            </form>
                                        </div>
                                    )}
                                </li>
                                <li className="relative">
                                    <button
                                        className="border w-10 h-10 rounded-full text-white"
                                        onClick={toggleUserDropdown}
                                        aria-label="User Dropdown"
                                    >
                                        <i className="fa-regular fa-user"></i>
                                    </button>
                                    {isUserOpen && (
                                        <div className="absolute -left-6 mt-2 w-max bg-white text-black">
                                            {!auth.isAuthenticated ? (
                                                <ul className="space-y-1">
                                                    <li>
                                                        <Link
                                                            to="/register"
                                                            className="flex items-center px-4 py-2 hover:bg-gray-200"
                                                        >
                                                            <i className="fa-solid fa-user-plus mr-4"></i> Register
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/login"
                                                            className="flex items-center px-4 py-2 hover:bg-gray-200"
                                                        >
                                                            <i className="fa-solid fa-right-to-bracket mr-4"></i> Login
                                                        </Link>
                                                    </li>
                                                </ul>
                                            ) : (
                                                <ul className="space-y-1">
                                                    <li>
                                                        <Link
                                                            to=""
                                                            className="flex items-center px-4 py-2 hover:bg-gray-200"
                                                        >
                                                            <i className="fa-solid fa-user mr-4"></i> Manager Profile
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to=""
                                                            className="flex items-center px-4 py-2 hover:bg-gray-200"
                                                        >
                                                            <i className="fa-solid fa-gear mr-4"></i> Setting
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to=""
                                                            className="flex items-center px-4 py-2 hover:bg-gray-200"
                                                        >
                                                            <i className="fa-solid fa-gear mr-4"></i> Pricing Plan
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            className="flex items-center px-4 py-2 hover:bg-gray-200"
                                                            onClick={handleLogoutClick}
                                                        >
                                                            <i className="fa-solid fa-right-to-bracket mr-4"></i> Logout
                                                        </Link>
                                                    </li>
                                                </ul>
                                            )}
                                        </div>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div >
        </header >
    );
};

export default Header;
