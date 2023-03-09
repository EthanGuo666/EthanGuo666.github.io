import React from "react";
import "../../styles/Canvas.css";
import ProjectHeader from "./ProjectHeader";
import CMU from "../../assets/CMU.jpeg";

function Avartus() {
  return (
    <div>
      <ProjectHeader />

      {/* Text area within the p-4 */}
      <div className='Canvas'>
        <div className='p-4'>hello</div>
      </div>
    </div>
  );
}

export default Avartus;
