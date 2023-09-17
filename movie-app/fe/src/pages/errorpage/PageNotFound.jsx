import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate("/");
    };

    return (
        <div className="bg-[#141414] w-full min-h-screen">
            <div className="container">
                <div className="flex flex-col justify-center items-center min-h-screen">
                    <div>
                        <img
                            className="w-1/2 mx-auto"
                            src="https://templates.iqonic.design/streamit/dashboard/html/assets/images/error/404.png"
                            alt="Page Not Found"
                        />
                        <h2 className="text-4xl font-semibold text-center text-white mt-8">Opps! This page is Not Found.</h2>
                        <p className="text-lg text-center text-white mb-4">The requested page dose not exist.</p>
                    </div>
                    <button
                        onClick={handleSubmit}
                        className="rounded bg-red-600 text-white px-4 py-2"
                    >
                        <i className="fa-solid fa-house"></i> Back To Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;