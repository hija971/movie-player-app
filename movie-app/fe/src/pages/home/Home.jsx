import React from "react";
import Layout from "../../components/layout/Layout.jsx";
import Banner from "../../components/banner/Banner.jsx";
import Section from "../../components/section/Section.jsx";
const Home = () => {
    const movies = [
        {
            imgUrl: "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2020/11/13.jpg",
            title: "Name msssssssssssss",
            time: "1hr : 10mins",
            star: "4.6"
        },
        {
            imgUrl: "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2020/11/Untitled-6.jpg",
            title: "Name msssssssssssss",
            time: "1hr : 10mins",
        },
        { imgUrl: "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2020/11/Untitled-5.jpg" },
        { imgUrl: "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2020/11/Untitled-4.jpg" },
        { imgUrl: "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2020/11/Untitled-3.jpg" },
        { imgUrl: "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2020/11/Untitled-2.jpg" },
        { imgUrl: "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2020/11/Untitled-7.jpg" },
        { imgUrl: "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2020/11/Untitled-7.jpg" },
        { imgUrl: "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2020/11/Untitled-7.jpg" },
        { imgUrl: "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2020/11/Untitled-7.jpg" },
        { imgUrl: "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2020/11/Untitled-7.jpg" },
    ];

    // call api method to get

    return (
        <Layout>
            <Banner movies={movies} />
            <Section
                heading="upcoming moives"
                movies={movies}

            />
            <Section
                heading="Lastest Movies"
                movies={movies}

            />
            <Section
                heading="Suggested For You"
                movies={movies}
            />
            <Section
                heading="Recommended TV Show"
                movies={movies}
            >
            </Section>
        </Layout>
    )
};

export default Home;