import React, { useContext, useState } from "react";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext.js";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { isFetching, dispatch } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [isAdminError, setIsAdminError] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await login({ email, password }, dispatch);
            if (response.error) {
                setError("Sai tên đăng nhập hoặc mật khẩu!");
            } else if (!response.user.isAdmin) {
                setIsAdminError(true);
            }
        } catch (error) {
            setError("Bạn không có quyền truy cập vào trang này!");
        }
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