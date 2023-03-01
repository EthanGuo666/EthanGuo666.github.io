import React from "react";

import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import "../styles/Canvas.css";
import PicturePlaceholder from '../assets/picturePlaceHolder.png';
import Avartus from '../assets/Avartus.jpg';
import Section28Cheese from '../assets/Section28Cheese.jpeg';
import QRcode from '../assets/QRcode.jpeg';
import SparkNewsAnalysis from '../assets/SparkNewsAnalysis.jpg';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function ProjectPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='Canvas text-center'>
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
          <Card className='hover:shadow-2xl' style={{borderRadius: '30px'}}>
            <CardActionArea onClick={() => console.log("first")}>
              <CardMedia
                style={{ height: 350}}
                component='img'
                image={Avartus}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Avartus
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  A teaching facility remote control<br/>
                  system of CMU IT Dept.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-14'>
          <Card className='hover:shadow-2xl' style={{borderRadius: '30px'}}>
            <CardActionArea>
              <CardMedia
                style={{ height: 350}}
                component='img'
                image={Section28Cheese}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Section 28 Cheese
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  The digitalization solution for<br/>
                  a prize-winning cheese manufacturer.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-14'>
          <Card className='hover:shadow-2xl' style={{borderRadius: '30px'}}>
            <CardActionArea>
              <CardMedia
                style={{ height: 350}}
                component='img'
                image={QRcode}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Zigzag QR filler
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  A high-performance QR code generator <br/>backend running on AWS
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-14'>
          <Card className='hover:shadow-2xl' style={{borderRadius: '30px'}}>
            <CardActionArea>
              <CardMedia
                style={{ height: 350}}
                component='img'
                image={SparkNewsAnalysis}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Spark News Analysis
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Undergraduate thesis project:<br/>
                  a data analysis pipeline with Apache Spark
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>

    </div>
  );
}

export default ProjectPage;
