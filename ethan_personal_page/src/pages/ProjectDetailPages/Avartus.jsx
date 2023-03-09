import React from "react";
import "../../styles/Canvas.css";
import ProjectHeader from "./ProjectHeader";
import CMU from "../../assets/CMU.jpg";

function Avartus() {
  return (
    <div>
      <ProjectHeader />

      <img src={CMU} className='w-screen h-80 object-cover' />
      <div className="absolute inset-0 w-full pt-36 text-center">
        <h1 className='text-white text-4xl font-serif'>Avartus</h1>
        <p className="text-gray-200 font-extralight italic">A teaching facility remote control <br/> system of CMU IT Dept.</p>
      </div>

      {/* Text area within the p-4 */}
      <div className='Canvas'>
        <div className='p-4'>hello</div>
      </div>
    </div>
  );
}

export default Avartus;
