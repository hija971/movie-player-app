import React, { useContext, useState } from "react";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext.js";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { isFetching, dispatch } = useContext(AuthContext);
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        login({ email, password }, dispatch);
    };

    return (
        <div className="login">
            <form className="loginForm">
                <input
                    type="text"
                    placeholder="Email"
                    className="loginInput"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="loginInput"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className="loginButton"
                    onClick={handleLogin}
                    disabled={isFetching}
                >
                    Login
                </button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
};

export default Login;