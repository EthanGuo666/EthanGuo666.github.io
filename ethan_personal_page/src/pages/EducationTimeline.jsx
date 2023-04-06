import Timeline from "@mui/lab/Timeline";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import React, { useEffect, useRef } from "react";

import "../styles/Canvas.css";

function EducationTimeline() {
  const refs = Array.from({ length: 30 }, () => useRef(null));

  useEffect(() => {
    function handleScroll() {
      const halfHeight = window.innerHeight / 2;

      refs.forEach((ref) => {
        const element = ref.current;
        const rect = element?.getBoundingClientRect();

        if (rect?.top < halfHeight) {
          element?.classList.add("text-black");
          element?.classList.remove("text-zinc-400");
          if (element?.id === "dotOrLine") {
            element?.classList.add("bg-black");
            element?.classList.remove("bg-zinc-400");
          }
        } else {
          element?.classList.remove("text-black");
          element?.classList.add("text-zinc-400");
          if (element?.id === "dotOrLine") {
            element?.classList.remove("bg-black");
            element?.classList.add("bg-zinc-400");
          }
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
        <br />

        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.3,
            },
          }}
        >
          <div ref={refs[0]}>
            <TimelineItem>
              <TimelineOppositeContent>2016 Sep</TimelineOppositeContent>
              <TimelineSeparator>
                <div
                  id='dotOrLine'
                  ref={refs[1]}
                  className='w-2 h-2 my-3 rounded-full '
                />
                <div id='dotOrLine' ref={refs[2]} className='w-0.5 h-12'></div>
              </TimelineSeparator>
              <TimelineContent>
                Beijing Institute of Technology (Undergraduate Admission)
              </TimelineContent>
            </TimelineItem>
          </div>

          <div ref={refs[3]}>
            <TimelineItem>
              <TimelineOppositeContent>2016 Sep</TimelineOppositeContent>
              <TimelineSeparator>
                <div
                  id='dotOrLine'
                  ref={refs[4]}
                  className='w-2 h-2 my-3 rounded-full '
                />
                <div id='dotOrLine' ref={refs[5]} className='w-0.5 h-10'></div>
              </TimelineSeparator>
              <TimelineContent>Eat</TimelineContent>
            </TimelineItem>
          </div>

          <div ref={refs[6]}>
            <TimelineItem>
              <TimelineOppositeContent>2016 Sep</TimelineOppositeContent>
              <TimelineSeparator>
                <div
                  id='dotOrLine'
                  ref={refs[7]}
                  className='w-2 h-2 my-3 rounded-full '
                />
                <div id='dotOrLine' ref={refs[8]} className='w-0.5 h-10'></div>
              </TimelineSeparator>
              <TimelineContent>Eat</TimelineContent>
            </TimelineItem>
          </div>

          <div ref={refs[9]}>
            <TimelineItem>
              <TimelineOppositeContent>2016 Sep</TimelineOppositeContent>
              <TimelineSeparator>
                <div
                  id='dotOrLine'
                  ref={refs[10]}
                  className='w-2 h-2 my-3 rounded-full '
                />
                <div id='dotOrLine' ref={refs[11]} className='w-0.5 h-10'></div>
              </TimelineSeparator>
              <TimelineContent>Eat</TimelineContent>
            </TimelineItem>
          </div>

          <div ref={refs[12]}>
            <TimelineItem>
              <TimelineOppositeContent>2016 Sep</TimelineOppositeContent>
              <TimelineSeparator>
                <div
                  id='dotOrLine'
                  ref={refs[13]}
                  className='w-2 h-2 my-3 rounded-full '
                />
                <div id='dotOrLine' ref={refs[14]} className='w-0.5 h-10'></div>
              </TimelineSeparator>
              <TimelineContent>Eat</TimelineContent>
            </TimelineItem>
          </div>

          <div ref={refs[15]}>
            <TimelineItem>
              <TimelineOppositeContent>2016 Sep</TimelineOppositeContent>
              <TimelineSeparator>
                <div
                  id='dotOrLine'
                  ref={refs[16]}
                  className='w-2 h-2 my-3 rounded-full '
                />
                <div id='dotOrLine' ref={refs[17]} className='w-0.5 h-10'></div>
              </TimelineSeparator>
              <TimelineContent>Eat</TimelineContent>
            </TimelineItem>
          </div>

          <div ref={refs[18]}>
            <TimelineItem>
              <TimelineOppositeContent>2016 Sep</TimelineOppositeContent>
              <TimelineSeparator>
                <div
                  id='dotOrLine'
                  ref={refs[19]}
                  className='w-2 h-2 my-3 rounded-full '
                />
                <div id='dotOrLine' ref={refs[20]} className='w-0.5 h-10'></div>
              </TimelineSeparator>
              <TimelineContent>Eat</TimelineContent>
            </TimelineItem>
          </div>

          <div ref={refs[21]}>
            <TimelineItem>
              <TimelineOppositeContent>2017 Oct</TimelineOppositeContent>
              <TimelineSeparator>
                <div
                  id='dotOrLine'
                  ref={refs[22]}
                  className='w-2 h-2 my-3 rounded-full '
                />
                {/* <div id='dotOrLine' ref={refs[11]} className='w-0.5 h-10'></div> */}
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
