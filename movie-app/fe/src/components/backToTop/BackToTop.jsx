import React, { useState, useEffect } from "react";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    className="w-12 h-12 flex justify-center items-center rounded-full text-white text-lg bg-red-600"
                    onClick={scrollToTop}
                >
                    <i className="fa-solid fa-chevron-up"></i>
                </button>
            )}
        </>
    );
};

export default BackToTop;