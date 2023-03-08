import React from "react";

import SummaryBox from "../components/SummaryBox";
import EducationTimeline from "./EducationTimeline";
import ProjectList from "./ProjectList";

function HomePage() {
  return (
    <div>
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
