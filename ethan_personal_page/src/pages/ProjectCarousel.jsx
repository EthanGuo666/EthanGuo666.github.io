import React, { useState } from "react";

import "../styles/Canvas2.css";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
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

import "../styles/ProjectCarousel.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function ProjectCarousel() {
    return (
        <div className='Canvas2 text-center' id='projects-top'>
            <br />
            <br />
            <br />
            <br />
            <span className='font-sans text-3xl font-bold text-stone-500'>
                Projects
            </span>
            <br />

            <Swiper
                spaceBetween={0}
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
                    "--swiper-pagination-color": "#FFFFFF",
                    "--swiper-navigation-color": "#FFFFFF",
                }}
            >
                <SwiperSlide>
                    <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-14'>
                        <Card
                            className='hover:shadow-2xl'
                            style={{
                                borderRadius: "30px",
                            }}
                        >
                            <CardActionArea href='#/projects/avartus'>
                                <CardMedia
                                    className='opacity-80 hover:opacity-100 transition duration-400'
                                    style={{ height: 350 }}
                                    component='img'
                                    image={CMU}
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant='h5'
                                        component='div'
                                    >
                                        Avartus
                                    </Typography>
                                    <Typography
                                        variant='body2'
                                        color='text.secondary'
                                    >
                                        A teaching facility remote control
                                        <br />
                                        system of CMU IT Dept.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-14'>
                        <Card
                            className='hover:shadow-2xl'
                            style={{ borderRadius: "30px" }}
                        >
                            <CardActionArea href='#/projects/qrcodegenerator'>
                                <CardMedia
                                    className='opacity-80 hover:opacity-100 transition duration-400'
                                    style={{ height: 350 }}
                                    component='img'
                                    image={AWS}
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant='h5'
                                        component='div'
                                    >
                                        QRcode generator
                                    </Typography>
                                    <Typography
                                        variant='body2'
                                        color='text.secondary'
                                    >
                                        A high-performance AWS QR code <br />
                                        generator backend
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-14'>
                        <Card
                            className='hover:shadow-2xl'
                            style={{ borderRadius: "30px" }}
                        >
                            <CardActionArea href='#/projects/sparknewsanalysis'>
                                <CardMedia
                                    className='opacity-80 hover:opacity-100 transition duration-400'
                                    style={{ height: 350 }}
                                    component='img'
                                    image={SparkNewsAnalysis}
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant='h5'
                                        component='div'
                                    >
                                        Spark News Analysis
                                    </Typography>
                                    <Typography
                                        variant='body2'
                                        color='text.secondary'
                                    >
                                        Undergraduate thesis project:
                                        <br />a data analysis pipeline with
                                        Apache Spark
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-14'>
                        <Card
                            className='hover:shadow-2xl'
                            style={{ borderRadius: "30px" }}
                        >
                            <CardActionArea href='#/projects/section28cheese'>
                                <CardMedia
                                    className='opacity-80 hover:opacity-100 transition duration-400'
                                    style={{ height: 350 }}
                                    component='img'
                                    image={Section28Cheese}
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant='h5'
                                        component='div'
                                    >
                                        Section 28 Cheese
                                    </Typography>
                                    <Typography
                                        variant='body2'
                                        color='text.secondary'
                                    >
                                        The digitalization solution for
                                        <br />a prize-winning cheese
                                        manufacturer.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </SwiperSlide>
            </Swiper>
            <br />
            <br />
            <br />
            <br />
        </div>
    );
}

export default ProjectCarousel;
