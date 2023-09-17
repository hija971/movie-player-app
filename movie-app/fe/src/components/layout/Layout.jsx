import React from "react";
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import BackToTop from "../backToTop/BackToTop.jsx";

const Layout = ({ children }) => {
    return (
        <div className="relative">
            <Header />
            <main className="bg-[#141414]">
                {children}
            </main>
            <Footer />
            <div className="fixed right-10 bottom-10">
                <BackToTop />
            </div>
        </div>
    )
}

export default Layout;