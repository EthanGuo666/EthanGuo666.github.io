import React from "react";

import HomePageHeaderBar from "../components/HomePageHeaderBar";
import SummaryBox from "../components/SummaryBox";
import EducationTimeline from "./EducationTimeline";
import ProjectList from "./ProjectList";
import PageFooter from "../components/PageFooter";

function HomePage() {
  return (
    <div>
      <div className='fixed w-full mx-auto p-4 z-50 bg-gradient-to-b from-black to-transparent'>
        <HomePageHeaderBar />
      </div>
      <div className='w-full h-screen'>
        <SummaryBox />
      </div>
      {/* todo: sticky effect of education timeline "https://tailwindcss.com/docs/position#statically-positioning-elements" */}
      <div className='w-full h-auto'>
        <EducationTimeline />
      </div>
      <div className='w-full h-auto'>
        <ProjectList />
      </div>
      <PageFooter />
    </div>
  );
}

export default HomePage;
