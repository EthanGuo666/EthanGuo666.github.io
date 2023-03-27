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
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CastIcon from "@mui/icons-material/Cast";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";

import Typography from "@mui/material/Typography";
import { Image } from "@mui/icons-material";
import "../styles/Canvas.css";

function EducationTimeline() {
  return (
    <div className='Canvas flex' id='education-top'>
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
                <SchoolIcon fontSize='large' />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant='h5' component='span'>
                <a
                  className='align-text-bottom text-orange-600 hover:text-white'
                  href='https://bit.edu.cn/'
                >
                  Beijing Institute of Technology
                </a>
              </Typography>
              <Typography>School of Computer Science and Technology</Typography>
              <Typography color='text.secondary'>
                Undergraduate admission
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
              <TimelineDot color='grey'></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "23px", px: 2 }}>
              <Typography>2nd-class schoolarship</Typography>
              <Typography variant='body2' color='text.secondary'>
                school of computer science
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
              <TimelineDot color='grey'></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography>Cardiff University, Wales, UK</Typography>
              <Typography variant='body2'>Big Data and High Performance Computing</Typography>
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
              2018 Sep - Dec
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color='grey'>{/* <RepeatIcon /> */}</TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography>Peking University</Typography>
              <Typography variant='body2'>Software Engineering Institute</Typography>
              <Typography variant='body2' color='text.secondary'>
                research assistant of Open-source Development Research Team
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant='body2'
              color='text.secondary'
            >
              2020 Jun
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color='grey'>{/* <RepeatIcon /> */}</TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography>Graduated from BIT</Typography>
              <Typography variant='body2' color='text.secondary'>
                Bachelor of Science in Computer Science
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant='h5'
              color='text.secondary'
            >
              2020 Aug
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color='warning'>
                <SchoolIcon fontSize='large' />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant='h5'>
                <a
                  className='align-text-bottom text-orange-600 hover:text-white'
                  href='https://www.cmu.edu/'
                >
                  Carnegie Mellon University
                </a>
              </Typography>
              <Typography>Heinz School of Information Systems</Typography>
              <Typography color='text.secondary'>
                Master of Science in Information Technology
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant='body2'
              color='text.secondary'
            >
              2020 Aug
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color='warning'>
                <EmojiEventsIcon fontSize='small' />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography className='text-orange-600'>
                Runner-up for GovHack in South Australia
              </Typography>
              <Typography variant='body2'>Data hackthon supported by SA government</Typography>
              <Typography variant='body2' color='text.secondary'>
                The winning news was reported on CMU news website
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant='body2'
              color='text.secondary'
            >
              2022 Aug
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color='grey'></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography>Graduated from CMU</Typography>
              <Typography variant='body2' color='text.secondary'>
                legend continues...
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
}

export default EducationTimeline;
