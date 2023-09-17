import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const [email, setEmail] = useState({
        email: ""
    });

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = () => {

    };

    return (
        <footer className="bg-[#111111] text-gray-300">
            <div className="container">
                <div className="footer-top py-20 sm:px-4 md:px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-4">
                        <div className="col-span-1 md:col-span-1 xl:col-span-3">
                            <img src="" alt="logo" />
                        </div>
                        <div className="col-span-1 md:col-span-1 xl:col-span-2">
                            <h3 className="text-xl font-medium text-white mb-8">Quick Links</h3>
                            <ul>
                                <li className="mb-2 hover:text-red-500 transition ease-in">
                                    <Link to="/about-us">About Us</Link>
                                </li>
                                <li className="mb-2 hover:text-red-500 transition ease-in">
                                    <Link to="/blog">Blog</Link>
                                </li>
                                <li className="mb-2 hover:text-red-500 transition ease-in">
                                    <Link to="/pricing-plan">Pricing Plan</Link>
                                </li>
                                <li className="hover:text-red-500 transition ease-in">
                                    <Link to="/faq">FAQ</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-1 md:col-span-1 xl:col-span-2">
                            <h3 className="text-xl font-medium text-white mb-8">Move To Watch</h3>
                            <ul>
                                <li className="mb-2 hover:text-red-500 transition ease-in">
                                    <Link>Top Trending</Link>
                                </li>
                                <li className="mb-2 hover:text-red-500 transition ease-in">
                                    <Link>Recommended</Link>
                                </li>
                                <li className="hover:text-red-500 transition ease-in">
                                    <Link>Popular</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-1 md:col-span-1 xl:col-span-2">
                            <h3 className="text-xl font-medium text-white mb-8">About Company</h3>
                            <ul>
                                <li className="mb-2 hover:text-red-500 transition ease-in">
                                    <Link>Contact Us</Link>
                                </li>
                                <li className="mb-2 hover:text-red-500 transition ease-in">
                                    <Link>Privacy Policy</Link>
                                </li>
                                <li className="hover:text-red-500 transition ease-in">
                                    <Link>Term Of Use</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-1 md:col-span-1 xl:col-span-3">
                            <h3 className="text-xl font-medium text-white mb-8">Subscribe Newsletter</h3>
                            <div className="flex mb-10">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-[#252525] w-full rounded py-2 px-2 focus:outline-none"
                                    placeholder="Email"
                                    onChange={handleChange}
                                    required
                                />
                                <button
                                    onSubmit={handleSubmit}
                                    className="bg-red-600 font-medium text-lg px-4 py-2 rounded"
                                >
                                    SUBSCRIBE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="footer-bottom py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-10">
                        <div className="lg:col-span-7 md:col-span-12">
                            <div>
                                <ul className="flex flex-wrap mb-4">
                                    <li className="mr-8 hover:text-red-500">
                                        <Link to="/">Terms Of Use</Link>
                                    </li>
                                    <li className="mr-8 hover:text-red-500">
                                        <Link to="/">Privacy Policy</Link>
                                    </li>
                                    <li className="mr-8 hover:text-red-500">
                                        <Link to="/blog">Blog</Link>
                                    </li>
                                    <li className="mr-8 hover:text-red-500">
                                        <Link to="/">FAQ</Link>
                                    </li>
                                    <li className="hover:text-red-500">
                                        <Link to="/">Watch List</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus rerum facere obcaecati expedita dicta consequuntur nesciunt eum quas aliquid odio, illum doloribus molestias ea quaerat quisquam magnam atque nisi temporibus?
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-2 md:col-span-6">
                            <h6 className="font-medium mb-4">Follow Us :</h6>
                            <ul className="flex">
                                <li className="flex justify-center items-center text-white bg-[#252525] rounded-full w-10 h-10 mr-4">
                                    <Link><i className="fab fa-facebook"></i></Link>
                                </li>
                                <li className="flex justify-center items-center text-white bg-[#252525] rounded-full w-10 h-10 mr-4">
                                    <Link><i className="fab fa-instagram"></i></Link>
                                </li>
                                <li className="flex justify-center items-center text-white bg-[#252525] rounded-full w-10 h-10">
                                    <Link><i className="fab fa-twitter"></i></Link>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:col-span-2 md:col-span-6">
                            <h6 className="">Download App</h6>
                            <div className="flex">
                                <Link>
                                    <img src="" alt="" />
                                </Link>
                                <Link>
                                    <img src="" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;