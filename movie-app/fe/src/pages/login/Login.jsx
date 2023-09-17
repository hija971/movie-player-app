import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/authService.js";
import AuthContext from "../../contexts/AuthContext/AuthContext.js";

const authService = new AuthService();

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false
    });
    const navigate = useNavigate();
    const { handleLogin } = useContext(AuthContext)

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        if (type === "checkbox" && name === "rememberMe") {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: checked
            }));
            setShowPassword(false);
        } else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            setError(null);
            const response = await authService.login(formData);
            await authService.login(formData);
            const { accessToken } = response.data;
            localStorage.setItem("accessToken", accessToken);
            await handleLogin();
            navigate("/");
        } catch (error) {
            setError(error.response.data.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-cover bg-center min-h-screen flex justify-center items-center"
            style={{
                backgroundImage: `url('https://templates.iqonic.design/streamit/dashboard/html/assets/images/login/login.jpg')`
            }}
        >
            <div className="container">
                <div className="flex justify-center items-center">
                    <div className="sm:w-2/3 md:w-1/2 lg:w-1/3 bg-black/50 rounded px-5 py-10 backdrop-blur backdrop-filter-blur-md">
                        <div>
                            <div className="sign-in-form">
                                <h3 className="text-center text-white text-3xl font-bold mb-8">Sign in</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="border border-transparent rounded h-10 text-lg w-full bg-[#141414] text-white mb-4 pl-2 focus:outline-none focus:border-red-500 transition-colors duration-300"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter email"
                                            required
                                        />
                                    </div>
                                    <div className="form-group relative input-icon">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            id="password"
                                            className="border border-transparent rounded h-10 text-lg w-full bg-[#141414] text-white mb-4 pl-2 pr-10 focus:outline-none focus:border-red-500"
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="Password"
                                            required
                                        />
                                        <span className="absolute right-2 top-2 cursor-pointer text-white hover:text-red-500" onClick={() => setShowPassword(!showPassword)}><i className={`far fa-eye${showPassword ? "-slash" : ""}`}></i></span>
                                    </div>
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="text-gray-500">
                                            <input
                                                type="checkbox"
                                                name="rememberMe"
                                                id="rememberMe"
                                                checked={formData.rememberMe}
                                                onChange={handleChange}
                                                className="mr-2"
                                            />
                                            <label htmlFor="rememberMe">Remember Me</label>
                                        </div>
                                        <button
                                            type="submit"
                                            className="bg-red-600 text-white rounded px-5 py-2"
                                            disabled={loading}
                                        >
                                            {loading ? "Signing in..." : "Sign in"}
                                        </button>
                                    </div>
                                </form>
                                {error && <p className="text-red-500">{error}</p>}
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-center text-white">
                                    <span className="mb-2 sm:mb-0">Don't have an account?</span>
                                    <Link className="text-red-500" to="/register">
                                        Sign Up
                                    </Link>
                                </div>
                                <div className="flex justify-center text-red-500">
                                    <Link to="/recover">Forgot your password?</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Login;