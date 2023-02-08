import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "../styles/Canvas.css";

function ProjectPage() {
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
