import React from "react";

import BIT from "../assets/BIT.png";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import SchoolIcon from "@mui/icons-material/School";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";

import Typography from "@mui/material/Typography";
import { Image } from "@mui/icons-material";

function EducationPage() {
  return (
    <div className='flex w-full h-full bg-zinc-300'>
      <div className='w-full m-auto my-16 text-center'>
        <span className='font-sans text-3xl font-bold text-stone-500'>
          Education
        </span>
        <br />
        <br />
        <br />

        <Timeline position='right'>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align='right'
              variant='h5'
              color='text.secondary'
            >
              2016 Sep
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color='warning'>
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant='h5' component='span'>
                <a
                  className='align-text-bottom hover:text-white'
                  href='https://bit.edu.cn/'
                >
                  Beijing Institute of Technology
                </a>
              </Typography>
              <Typography>School of Computer Science and Technology</Typography>
              <Typography color='text.secondary'>Undergraduate</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant='body2'
              color='text.secondary'
            >
              2017 Feb
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color='success'>
                {/* <LaptopMacIcon /> */}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "23px", px: 2 }}>
              <Typography>
                {/* 2nd class schoolarship */}
                Title2
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                school of computer science
                {/* description2 */}
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant='body2'
              color='text.secondary'
            >
              2017 Jun
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color='success'>{/* <HotelIcon /> */}</TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography>Title3</Typography>
              <Typography variant='body2' color='text.secondary'>
                description
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant='body2'
              color='text.secondary'
            >
              2018 Jul - Aug
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color='success'>
                {/* <RepeatIcon /> */}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant='h6'>
                Cardiff University, Wales, UK
              </Typography>
              <Typography>Big Data and High Performance Computing</Typography>
              <Typography variant='body2' color='text.secondary'>
                summer school project
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant='body2'
              color='text.secondary'
            >
              time4
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color='success'>
                {/* <RepeatIcon /> */}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant='h6'>
                Title 4
              </Typography>
              <Typography>Description4</Typography>
              <Typography variant='body2' color='text.secondary'>
                note4
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant='body2'
              color='text.secondary'
            >
              time4
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color='success'>
                {/* <RepeatIcon /> */}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant='h6'>
                Title 4
              </Typography>
              <Typography>Description4</Typography>
              <Typography variant='body2' color='text.secondary'>
                note4
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant='body2'
              color='text.secondary'
            >
              time4
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color='success'>
                {/* <RepeatIcon /> */}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant='h6'>
                Title 4
              </Typography>
              <Typography>Description4</Typography>
              <Typography variant='body2' color='text.secondary'>
                note4
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant='body2'
              color='text.secondary'
            >
              time4
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color='success'>
                {/* <RepeatIcon /> */}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant='h6'>
                Title 4
              </Typography>
              <Typography>Description4</Typography>
              <Typography variant='body2' color='text.secondary'>
                note4
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant='body2'
              color='text.secondary'
            >
              time4
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color='success'>
                {/* <RepeatIcon /> */}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant='h6'>
                Title 4
              </Typography>
              <Typography>Description4</Typography>
              <Typography variant='body2' color='text.secondary'>
                note4
              </Typography>
            </TimelineContent>
          </TimelineItem>

        </Timeline>
      </div>
    </div>
  );
}

export default EducationPage;
