import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function ProjectPageHeader() {
  return (
    <div>
      <div className='fixed flex items-center w-full h-28 p-5 mx-auto z-50 bg-gradient-to-b from-black to-transparent'>
        <a
          href='/'
          className='text-gray-300 text-lg text-center hover:cursor-pointer hover:text-white'
        >
          <ArrowBackIosNewIcon />
          &nbsp;Back
        </a>
      </div>
    </div>
  );
}

export default ProjectPageHeader;
