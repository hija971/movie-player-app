import React from "react";
import Layout from "../../components/layout/Layout.jsx";
import ComingSoon from "../commingsoon/ComingSoonPage.jsx";

const isDevelopment = true;

const ShopPage = () => {
    if (isDevelopment) {
        return <ComingSoon />
    }

    return (
        <Layout>

        </Layout>
    )
}

export default ShopPage;