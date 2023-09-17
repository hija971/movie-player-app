import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerItem from "../listItem/BannerItem";

const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 right-4 flex justify-center items-center bg-transparent text-white border w-12 h-12 rounded-full cursor-pointer z-50"
            onClick={onClick}
        >
            <i className="fa-solid fa-chevron-right"></i>
        </div>
    );
};

const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 left-4 flex justify-center items-center bg-transparent text-white border w-12 h-12 rounded-full cursor-pointer z-50"
            onClick={onClick}
        >
            <i className="fa-solid fa-chevron-left"></i>
        </div>
    );
};

const Banner = ({ movies }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        afterChange: (index) => setActiveIndex(index),
    };

    return (
        <section>
            <Slider {...settings}>
                {movies.map((movie, index) => (
                    <BannerItem
                        key={index}
                        movie={movie}
                        isActive={activeIndex === index}
                    />
                ))}
            </Slider>
        </section>
    );
};

export default Banner;