import React from "react";

import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CMU from "../assets/CMU-Clear.jpeg";
import QRcode from "../assets/QRcode.jpeg";
import Section28Cheese from "../assets/Section28Cheese.jpeg";
import SparkNewsAnalysis from "../assets/SparkNewsAnalysis.jpg";
import "../styles/Canvas.css";

function ProjectList() {
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

      <div className='flex flex-wrap justify-center'>
        <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-14'>
          <Card className='hover:shadow-2xl' style={{ borderRadius: "30px" }}>
            <CardActionArea href='#/projects/avartus'>
              <CardMedia
                className='opacity-60 hover:opacity-100 transition duration-400'
                style={{ height: 350 }}
                component='img'
                image={CMU}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Avartus
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  A teaching facility remote control
                  <br />
                  system of CMU IT Dept.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-14'>
          <Card className='hover:shadow-2xl' style={{ borderRadius: "30px" }}>
            <CardActionArea href='#/projects/qrcodegenerator'>
              <CardMedia
                className='opacity-60 hover:opacity-100 transition duration-400'
                style={{ height: 350 }}
                component='img'
                image={QRcode}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  QRcode generator
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  A high-performance AWS QR code <br />
                  generator backend
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-14'>
          <Card className='hover:shadow-2xl' style={{ borderRadius: "30px" }}>
            <CardActionArea>
              <CardMedia
                className='opacity-60 hover:opacity-100 transition duration-400'
                style={{ height: 350 }}
                component='img'
                image={Section28Cheese}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Section 28 Cheese
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  The digitalization solution for
                  <br />a prize-winning cheese manufacturer.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-14'>
          <Card className='hover:shadow-2xl' style={{ borderRadius: "30px" }}>
            <CardActionArea>
              <CardMedia
                className='opacity-60 hover:opacity-100 transition duration-400'
                style={{ height: 350 }}
                component='img'
                image={SparkNewsAnalysis}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Spark News Analysis
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Undergraduate thesis project:
                  <br />a data analysis pipeline with Apache Spark
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
