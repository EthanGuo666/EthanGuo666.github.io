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
          {/* <div className='bg-gray-200 h-80 rounded-3xl hover:shadow-2xl'>
            Object 1
          </div> */}
          <Card className='hover:shadow-2xl' style={{borderRadius: '30px'}}>
            <CardActionArea>
              <CardMedia
                component='img'
                image={PicturePlaceholder}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Avartus
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Description project 1
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-14'>
          {/* <div className='bg-gray-200 h-80 rounded-3xl hover:shadow-2xl'>
            Object 2
          </div> */}
          <Card className='hover:shadow-2xl' style={{borderRadius: '30px'}}>
            <CardActionArea>
              <CardMedia
                component='img'
                image={PicturePlaceholder}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Project 2
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Description project 2
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-14'>
          {/* <div className='bg-gray-200 h-80 rounded-3xl hover:shadow-2xl'>
            Object 3
          </div> */}
          <Card className='hover:shadow-2xl' style={{borderRadius: '30px'}}>
            <CardActionArea>
              <CardMedia
                component='img'
                image={PicturePlaceholder}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Project 3
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Description project 3
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-14'>
          {/* <div className='bg-gray-200 h-80 rounded-3xl hover:shadow-2xl'>
            Object 4
          </div> */}
          <Card className='hover:shadow-2xl' style={{borderRadius: '30px'}}>
            <CardActionArea>
              <CardMedia
                component='img'
                image={PicturePlaceholder}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Project 4
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Description project 4
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
