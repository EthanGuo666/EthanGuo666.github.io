import React, { useState } from "react";

import "../styles/Canvas.css";
import CMU from "../assets/CMU-Clear.jpeg";
import QRcode from "../assets/QRcode.jpeg";
import AWS from "../assets/AWS.png";
import Section28Cheese from "../assets/Section28Cheese.jpeg";
import SparkNewsAnalysis from "../assets/SparkNewsAnalysis.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function ProjectCarousel() {
    return (
        <div className='Canvas text-center' id='projects-top'>
            <br />
            <br />
            <br />
            <br />
            <br />
            <span className='font-sans text-3xl font-bold text-stone-500'>
                Projects
            </span>
            <br />
            <br />

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                // change the color of the navigation arrows
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper'
                style={{
                    "--swiper-pagination-color": "#F0F0F0",
                    "--swiper-navigation-color": "#F0F0F0",
                }}
            >
                <SwiperSlide>
                    <img src={CMU} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={AWS} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SparkNewsAnalysis} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Section28Cheese} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default ProjectCarousel;
