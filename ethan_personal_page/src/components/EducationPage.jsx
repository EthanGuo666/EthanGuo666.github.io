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
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CastIcon from '@mui/icons-material/Cast';
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
              2017 Jun
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color='success'></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "23px", px: 2 }}>
              <Typography>2nd class schoolarship</Typography>
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
              2018 Feb
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color='success'></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography>3rd class schoolarship</Typography>
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
              <TimelineDot color='success'>{/* <RepeatIcon /> */}</TimelineDot>
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
              2018 Sep - Dec
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color='success'>{/* <RepeatIcon /> */}</TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant='h6'>Peking University</Typography>
              <Typography>Software Engineering Institute</Typography>
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
              time4
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color='success'>{/* <RepeatIcon /> */}</TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant='h6'>Title 4</Typography>
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
              <TimelineDot color='success'>{/* <RepeatIcon /> */}</TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant='h6'>Title 4</Typography>
              <Typography>Description4</Typography>
              <Typography variant='body2' color='text.secondary'>
                note4
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
              <TimelineDot color='warning'><SchoolIcon /></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant='h5'>
                <a
                  className='align-text-bottom hover:text-white'
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
              <TimelineDot color='primary'><EmojiEventsIcon /></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant='h6'>Runner-up for GovHack in South Australia region</Typography>
              <Typography>Data hackthon supported by SA government</Typography>
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
              2021 May - Jul
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color='primary'><CastIcon /></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant='h6'>Main contributor of Avartus project</Typography>
              <Typography>A teaching facility remote control project of CMU</Typography>
              <Typography variant='body2' color='text.secondary'>
                Team Lead
              </Typography>
            </TimelineContent>
          </TimelineItem>


          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant='h5'
              color='text.secondary'
            >
              2022 Aug
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color='success'></TimelineDot>
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

export default EducationPage;
