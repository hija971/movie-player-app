// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";
// import "swiper/css";
// import ListItem from "../listItem/ListItem.jsx";


// const List = ({ apiUrl, movies }) => {
//     const swiperRef = useRef(null);

//     const handlePrev = () => {
//         if (swiperRef.current && swiperRef.current.swiper) {
//             swiperRef.current.swiper.slidePrev();
//         }
//     };

//     const handleNext = () => {
//         if (swiperRef.current && swiperRef.current.swiper) {
//             swiperRef.current.swiper.slideNext();
//         }
//     };

//     return (
//         <div className="relative">
//             <Swiper
//                 slidesPerView={6}
//                 spaceBetween={0}
//                 autoplay={{
//                     delay: 1000,
//                     disableOnInteraction: true,
//                 }}
//                 loop={true}
//                 navigation={{
//                     nextEl: ".swiper-button-next",
//                     prevEl: ".swiper-button-prev",
//                 }}
//                 onSwiper={(swiper) => (swiperRef.current = swiper)}
//                 breakpoints={{
//                     1024: {
//                         slidesPerView: 6,
//                     },
//                     768: {
//                         slidesPerView: 3,
//                     },
//                     480: {
//                         slidesPerView: 2,
//                     },
//                 }}
//                 modules={[Autoplay, Navigation]}
//             >
//                 {movies.map((movie, index) => (
//                     <SwiperSlide key={index}>
//                         <ListItem key={index} movie={movie} />
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//             <button
//                 className="swiper-button-prev absolute top-1/2 left-1 bg-transparent text-white border w-8 h-8 rounded-full z-50 cursor-pointer hover:border-red-500 hover:bg-red-500 transform transition-transform duration-300 ease-in-out"
//                 onClick={handlePrev}
//             >
//                 <i className="fa-solid fa-chevron-left"></i>
//             </button>
//             <button
//                 className="swiper-button-next absolute top-1/2 right-1 bg-transparent text-white border w-8 h-8 rounded-full z-50 cursor-pointer hover:border-red-500 hover:bg-red-500 transform transition-transform duration-300 ease-in-out"
//                 onClick={handleNext}
//             >
//                 <i className="fa-solid fa-chevron-right"></i>
//             </button>
//         </div>
//     );
// };

// export default List;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ListItem from "../../components/listItem/ListItem.jsx";

const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 right-2 flex justify-center items-center bg-transparent text-white border w-8 h-8 rounded-full cursor-pointer hover:border-red-500 hover:bg-red-500 transform transition-transform duration-300 ease-in-out z-50"
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
            className="absolute top-1/2 left-2 flex justify-center items-center bg-transparent text-white border w-8 h-8 rounded-full cursor-pointer hover:border-red-500 hover:bg-red-500 transform transition-transform duration-300 ease-in-out z-50"
            onClick={onClick}
        >
            <i className="fa-solid fa-chevron-left"></i>
        </div>
    );
};

const List = ({ movies }) => {
    const settings = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    return (
        <Slider {...settings}>
            {movies.map((movie, index) => (
                <ListItem key={index} movie={movie} />
            ))}
        </Slider>
    );
};

export default List;