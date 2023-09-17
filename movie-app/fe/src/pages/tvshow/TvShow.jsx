import React from "react";
import Layout from "../../components/layout/Layout.jsx";
import ComingSoonPage from "../commingsoon/ComingSoonPage.jsx";

const isDevelopment = true;

const TvShowPage = () => {
    if (isDevelopment) {
        return <ComingSoonPage />
    }

    return (
        <Layout>

        </Layout>
    )
}

export default TvShowPage;