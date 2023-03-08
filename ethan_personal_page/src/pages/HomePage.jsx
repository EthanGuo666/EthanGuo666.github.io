import React from "react";

import HeaderBar from "../components/HeaderBar";
import SummaryBox from "../components/SummaryBox";
import EducationTimeline from "./EducationTimeline";
import ProjectList from "./ProjectList";

function HomePage() {
  return (
    <div>
      <div className='fixed w-full mx-auto p-4 z-50 bg-gradient-to-b from-black to-transparent'>
        <HeaderBar />
      </div>
      <div className='w-full h-screen'>
        <SummaryBox />
      </div>
      <div className='w-full h-auto'>
        <EducationTimeline />
      </div>
      <div className='w-full h-auto'>
        <ProjectList />
      </div>
    </div>
  );
}

export default HomePage;
