import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import React, { useEffect, useRef } from "react";

import "../styles/Canvas.css";
import { colors } from "@mui/material";

function EducationTimeline() {
  const refs = Array.from({ length: 10 }, () => useRef(null));

  useEffect(() => {
    function handleScroll() {
      const halfHeight = window.innerHeight / 2;

      refs.forEach((ref) => {
        const element = ref.current;
        const rect = element?.getBoundingClientRect();

        if (rect?.top < halfHeight) {
          element?.classList.add("text-black");
          element?.classList.remove("text-gray-400");
        } else {
          element?.classList.remove("text-black");
          element?.classList.add("text-gray-400");
        }
      });
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [refs]);

  return (
    <div className='Canvas flex' id='education-top'>
      <div className='w-full m-auto my-16 text-center'>
        <span className='font-sans text-3xl font-bold text-stone-500'>
          Education
        </span>
        <br />
        <br />

        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.35,
            },
          }}
        >
          <div ref={refs[0]}>
            <TimelineItem>
              <TimelineOppositeContent>2016 Sep</TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Eat</TimelineContent>
            </TimelineItem>
          </div>

          <div ref={refs[1]}>
            <TimelineItem>
              <TimelineOppositeContent>2016 Sep</TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Eat</TimelineContent>
            </TimelineItem>
          </div>

          <div ref={refs[2]}>
            <TimelineItem>
              <TimelineOppositeContent>2016 Sep</TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Eat</TimelineContent>
            </TimelineItem>
          </div>

          <div ref={refs[3]}>
            <TimelineItem>
              <TimelineOppositeContent>2017 Oct</TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Code</TimelineContent>
            </TimelineItem>
          </div>
        </Timeline>
      </div>
    </div>
  );
}

export default EducationTimeline;
