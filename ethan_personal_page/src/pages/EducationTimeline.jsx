import Timeline from "@mui/lab/Timeline";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import React, { useEffect, useRef } from "react";

import "../styles/Canvas.css";
import { School } from "@mui/icons-material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import BIT from "../assets/BIT.png";
import CMULogo from "../assets/CMULogo.png";

function EducationTimeline() {
    const refs = Array.from({ length: 50 }, () => useRef(null));

    useEffect(() => {
        function handleScroll() {
            const halfHeight = window.innerHeight / 2;

            refs.forEach((ref) => {
                const element = ref.current;
                const rect = element?.getBoundingClientRect();

                if (rect?.top < halfHeight) {
                    element?.classList.add("text-stone-600");
                    element?.classList.remove("text-zinc-200");
                    if (element?.id === "dotOrLine") {
                        element?.classList.add("bg-stone-600");
                        element?.classList.remove("bg-zinc-200");
                    }
                    if (element?.id === "logo") {
                        element?.classList.remove("grayscale");
                        element?.classList.remove("opacity-10");
                        element?.classList.add("grayscale-0");
                    }
                } else {
                    element?.classList.remove("text-stone-600");
                    element?.classList.add("text-zinc-200");
                    if (element?.id === "dotOrLine") {
                        element?.classList.remove("bg-stone-600");
                        element?.classList.add("bg-zinc-200");
                    }
                    if (element?.id === "logo") {
                        element?.classList.remove("grayscale-0");
                        element?.classList.add("opacity-10");
                        element?.classList.add("grayscale");
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
                            flex: 0.25,
                        },
                    }}
                >
                    <div ref={refs[0]}>
                        <TimelineItem className='h-24'>
                            <TimelineOppositeContent>
                                2016 Sep
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <div
                                    id='dotOrLine'
                                    ref={refs[1]}
                                    className='w-0.5 h-5'
                                />
                                <School />
                                <div
                                    id='dotOrLine'
                                    ref={refs[3]}
                                    className='w-0.5 h-20'
                                />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className='flex'>
                                    <img
                                        ref={refs[4]}
                                        id='logo'
                                        src={BIT}
                                        className='w-12 h-12 rounded-full mr-3 hover:cursor-pointer'
                                        onClick={() => {
                                            window.open(
                                                "https://www.bit.edu.cn/"
                                            );
                                        }}
                                    />
                                    <div>
                                        <a
                                            className='font-bold hover:text-gray-400 hover:cursor-pointer'
                                            href='https://www.bit.edu.cn/'
                                        >
                                            Beijing Institute of Technology
                                        </a>
                                        <div className='text-xs'>
                                            Undergraduate Admission
                                        </div>
                                    </div>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                    </div>

                    <div ref={refs[5]}>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                2017 Jun
                            </TimelineOppositeContent>
                            <TimelineSeparator className='mx-2'>
                                <div
                                    id='dotOrLine'
                                    ref={refs[6]}
                                    className='w-0.5 h-5'
                                />
                                <div
                                    id='dotOrLine'
                                    ref={refs[7]}
                                    className='w-2 h-2 rounded-full z-10'
                                />
                                <div
                                    id='dotOrLine'
                                    ref={refs[8]}
                                    className='w-0.5 h-20'
                                />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div>2nd-class schoolarship</div>
                                <div className='text-xs'>
                                    School of Computer Science
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                    </div>

                    <div ref={refs[9]}>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                2018 Sep
                            </TimelineOppositeContent>
                            <TimelineSeparator className='mx-2'>
                                <div
                                    id='dotOrLine'
                                    ref={refs[10]}
                                    className='w-0.5 h-5'
                                />
                                <div
                                    id='dotOrLine'
                                    ref={refs[11]}
                                    className='w-2 h-2 rounded-full z-10'
                                />
                                <div
                                    id='dotOrLine'
                                    ref={refs[12]}
                                    className='w-0.5 h-20'
                                />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div>Peking University, Beijing</div>
                                <div className='text-xs'>
                                    Research Assistant, Software Engineering
                                    Institute
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                    </div>

                    <div ref={refs[13]}>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                2020 Jun
                            </TimelineOppositeContent>
                            <TimelineSeparator className='mx-2'>
                                <div
                                    id='dotOrLine'
                                    ref={refs[14]}
                                    className='w-0.5 h-5'
                                />
                                <div
                                    id='dotOrLine'
                                    ref={refs[15]}
                                    className='w-2 h-2 rounded-full z-10'
                                />
                                <div
                                    id='dotOrLine'
                                    ref={refs[16]}
                                    className='w-0.5 h-20'
                                />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div>Graduated from BIT</div>
                                <div className='text-xs'>
                                    Bachelor of Science in Computer Science
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                    </div>

                    <div ref={refs[17]}>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                2020 Aug
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <div
                                    id='dotOrLine'
                                    ref={refs[18]}
                                    className='w-0.5 h-5'
                                />
                                <School />
                                <div
                                    id='dotOrLine'
                                    ref={refs[19]}
                                    className='w-0.5 h-20'
                                />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className='flex'>
                                    <img
                                        id='logo'
                                        ref={refs[20]}
                                        src={CMULogo}
                                        className='w-12 h-12 rounded-full mr-3 hover:cursor-pointer'
                                        onClick={() => {
                                            window.open("https://www.cmu.edu/");
                                        }}
                                    />
                                    <div>
                                        <a
                                            className='font-bold hover:text-gray-400 hover:cursor-pointer'
                                            href='https://www.cmu.edu/'
                                        >
                                            Carnegie Mellon University
                                        </a>
                                        <div className='text-xs'>
                                            Master's Admission
                                        </div>
                                    </div>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                    </div>

                    <div ref={refs[21]}>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                2020 Sep
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <div
                                    id='dotOrLine'
                                    ref={refs[22]}
                                    className='w-0.5 h-5'
                                />
                                <EmojiEventsIcon />
                                <div
                                    id='dotOrLine'
                                    ref={refs[23]}
                                    className='w-0.5 h-20'
                                />
                            </TimelineSeparator>
                            <TimelineContent>
                                <a
                                    className='font-bold hover:text-gray-400 hover:cursor-pointer'
                                    href='https://2020.hackerspace.govhack.org/profiles/yixuan_guo'
                                >
                                    Runner-up of GovHack 2020 in South Australia
                                </a>
                                <div className='text-xs'>
                                    Govhack, the Largest Data Hackthon in
                                    Australia
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                    </div>

                    <div ref={refs[24]}>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                2016 Sep
                            </TimelineOppositeContent>
                            <TimelineSeparator className='mx-2'>
                                <div
                                    id='dotOrLine'
                                    ref={refs[25]}
                                    className='w-0.5 h-5'
                                />
                                <div
                                    id='dotOrLine'
                                    ref={refs[26]}
                                    className='w-2 h-2 rounded-full z-10'
                                />
                                <div
                                    id='dotOrLine'
                                    ref={refs[27]}
                                    className='w-0.5 h-20'
                                />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div>Graduated from CMU</div>
                                <div className='text-xs'>
                                    Master of Science in Information Technology
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                    </div>
                </Timeline>
                <br />
                <br />
            </div>
            <br />
        </div>
    );
}

export default EducationTimeline;
