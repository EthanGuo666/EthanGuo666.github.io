import React from "react";
import { useState } from "react";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "../styles/Canvas.css";

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
      <span className='font-sans text-3xl font-bold text-stone-500'>
        Projects
      </span>
      <br />
      <br />
      <br />

      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab label='Item One' {...a11yProps(0)} />
          <Tab label='Item Two' {...a11yProps(1)} />
          <Tab label='Item Three' {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>

      <div className='m-5'>
        <div className='grid gap-4 grid-cols-2 grid-rows-2'>
          <div className='mx-auto'>
            <Card sx={{ maxWidth: 345 }} className='hover:shadow-2xl'>
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='140'
                  image='/src/assets/BIT.png'
                  //alt='green iguana'
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

          <div className='mx-auto'>
            <Card sx={{ maxWidth: 345 }} className='hover:shadow-2xl'>
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='140'
                  image='/src/assets/BIT.png'
                  //alt='green iguana'
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

          <div className='mx-auto'>
            <Card sx={{ maxWidth: 345 }} className='hover:shadow-2xl'>
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='140'
                  image='/src/assets/BIT.png'
                  //alt='green iguana'
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

          <div className='mx-auto'>
            <Card sx={{ maxWidth: 345 }} className='hover:shadow-2xl'>
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='140'
                  image='/src/assets/BIT.png'
                  //alt='green iguana'
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
    </div>
  );
}

export default ProjectPage;
