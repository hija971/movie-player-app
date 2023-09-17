import React from "react";
import Layout from "../../components/layout/Layout.jsx";
import Section from "../../components/section/Section.jsx";
import Banner from "../../components/banner/Banner.jsx";

const MoviePage = () => {
    const movies = [
        {
            id: 1,
            title: "film 1xxxxxxxxxxxxxxxxxxxxx",
            time: "1hr : 10mins",
            imgUrl:
                "https://templates.iqonic.design/streamit/frontend/html/images/slider/slider1.jpg"
        },
        {
            id: 2,
            title: "film 2",
            imgUrl:
                "https://templates.iqonic.design/streamit/frontend/html/images/slider/slider2.jpg"
        },
        {
            id: 3,
            title: "film 3",
            imgUrl:
                "https://templates.iqonic.design/streamit/frontend/html/images/slider/slider3.jpg"
        },
    ];

    return (
        <Layout>
            <Banner movies={movies} />
            {/* <Section
                heading="Popular Movies"
            >

            </Section>
            <Section
                heading="Specials & Lastest Movies"
            >

            </Section>
            <Section
                heading="Movies Recommended For You"
            >

            </Section> */}
        </Layout>
    )
}

export default MoviePage;