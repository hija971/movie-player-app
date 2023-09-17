import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/authService.js";

const authService = new AuthService();

const Register = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        firstname: "",
        lastname: "",
        password: "",
        repeatpassword: "",
        subscription: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            setError(null);
            await authService.register(formData);
            navigate("/login");
        } catch (error) {
            setError(error.response.data.message);
        } finally {
            setLoading(false);
        };
    };

    return (
        <section
            className="bg-cover bg-center min-h-screen flex justify-center items-center"
            style={{
                backgroundImage: `url('https://templates.iqonic.design/streamit/dashboard/html/assets/images/login/login.jpg')`
            }}
        >
            <div className="container">
                <div className="flex justify-center items-center">
                    <div className="sm:w-2/3 md:w-1/2 lg:w-1/2 bg-black/50 rounded backdrop-blur backdrop-filter-blur-md px-5 py-10">
                        <div>
                            <h3 className="text-center text-white text-3xl font-bold mb-10">
                                Sign Up
                            </h3>
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                    <div>
                                        <label
                                            className="text-lg text-gray-400"
                                            htmlFor="fullName"
                                        >
                                            Username
                                        </label>
                                        <input
                                            type="text"
                                            name="fullname"
                                            id="fullname"
                                            placeholder="Enter Full Name"
                                            className="w-full p-2 text-white bg-[#141414] border border-gray-300 focus:bg-transparent focus:outline-none"
                                            value={formData.fullname}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label className="text-lg text-gray-400" htmlFor="email">
                                            E-mail
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Enter Email"
                                            className="w-full p-2 text-white bg-[#141414] border border-gray-300 focus:bg-transparent focus:outline-none"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label className="text-lg text-gray-400" htmlFor="firstName">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            name="firstname"
                                            id="firstname"
                                            placeholder="First Name"
                                            className="w-full p-2 text-white bg-[#141414] border border-gray-300 focus:bg-transparent focus:outline-none"
                                            value={formData.firstname}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label className="text-lg text-gray-400" htmlFor="lastName">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            name="lastname"
                                            id="lastname"
                                            placeholder="Last Name"
                                            className="w-full p-2 text-white bg-[#141414] border border-gray-300 focus:bg-transparent focus:outline-none"
                                            value={formData.lastname}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="relative">
                                        <label className="text-lg text-gray-400" htmlFor="password">
                                            Password
                                        </label>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            id="password"
                                            placeholder="Password"
                                            className="w-full p-2 text-white bg-[#141414] border border-gray-300 focus:bg-transparent focus:outline-none"
                                            value={formData.password}
                                            onChange={handleChange}
                                        />
                                        <span
                                            className="absolute right-2 top-1/2 cursor-pointer text-white hover:text-red-500"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            <i className={`far fa-eye${showPassword ? "-slash" : ""}`}></i>
                                        </span>
                                    </div>

                                    <div className="relative">
                                        <label className="text-lg text-gray-400" htmlFor="repeatPassword">
                                            Repeat Password
                                        </label>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="repeatpassword"
                                            id="repeatpassword"
                                            placeholder="Repeat Password"
                                            className="w-full p-2 text-white bg-[#141414] border border-gray-300 focus:bg-transparent focus:outline-none"
                                        />
                                        <span
                                            className="absolute right-2 top-1/2 cursor-pointer text-white hover:text-red-500"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            <i className={`far fa-eye${showPassword ? "-slash" : ""}`}></i>
                                        </span>
                                    </div>
                                </div>
                                {/* <div className="my-2">
                                    <input
                                        className="mr-2"
                                        type="radio"
                                        name="subscription"
                                        id="customradio"
                                        value="premium"
                                        checked={formData.subscription === "premium"}
                                        onChange={handleChange}
                                    />
                                    <label className="text-gray-400" htmlFor="subscription">
                                        Premium-$39 / 3 Months with a 5 day free trial
                                    </label>
                                </div>
                                <div className="my-2">
                                    <input
                                        className="mr-2"
                                        type="radio"
                                        name="subscription"
                                        id="customradio"
                                        value="basic"
                                        checked={formData.subscription === "basic"}
                                        onChange={handleChange}
                                    />
                                    <label className="text-gray-400" htmlFor="subscription">
                                        Basic- $19 / 1 Month
                                    </label>
                                </div>
                                <div className="my-2">
                                    <input
                                        className="mr-2"
                                        type="radio"
                                        name="subscription"
                                        id="customradio"
                                        value="free"
                                        checked={formData.subscription === "free"}
                                        onChange={handleChange}
                                    />
                                    <label className="text-gray-400" htmlFor="subscription">
                                        Free-Free
                                    </label>
                                </div> */}
                                <button
                                    type="submit"
                                    className="w-full py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
                                    onSubmit={handleSubmit}
                                >
                                    {loading ? "Sign Up..." : "Sign Up"}
                                </button>
                            </form>
                            {/* {error && <p className="text-red-500">{error}</p>} */}
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-center text-white">
                                Already have an account?{" "}
                                <Link className="text-red-500" to="/login">
                                    Sign in
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
