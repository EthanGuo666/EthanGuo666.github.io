import React from "react";
import "../../styles/Canvas.css";
import ProjectPageHeader from "./ProjectPageHeader";
import CMU from "../../assets/CMU.jpg";
import PicturePlaceHolder from "../../assets/PicturePlaceHolder.png";

function Avartus() {
  return (
    <div>
      <ProjectPageHeader />

      <img src={CMU} className='w-screen h-80 object-cover' />
      <div className='absolute inset-0 w-full pt-32 text-center'>
        <h1 className='text-white text-4xl font-serif'>Avartus</h1>
        <p className='text-gray-200 font-extralight italic'>
          A teaching facility remote control <br /> system of CMU IT Dept.
        </p>
      </div>

      {/* Text area within the p-4 */}
      <div className='Canvas font-serif'>
        <div className='px-6 pt-6'>
          <span className='text-4xl'>T</span>
          he original idea of Avartus was put up in 2020 to help faculties with
          their daily work at CMU. During the covid lockdown, the CMU Australia
          campus has complied with the SA government protocol that restricted
          the access to public spaces for people who have symptoms. That is when
          Avartus comes to the picture.
        </div>
        <div className='px-6 pt-6'>
          Fortunately, I got the opportunity to join this innovative project as
          the leader of a group of interns. We are all CMU students that were on
          same Master's program in the Heinz College of Information Systems.
        </div>
        {/* todo: image and text responsive to the screen size */}
        <div className='m-6'>
          <img src={PicturePlaceHolder} className='w-1/2 rounded-2xl' />
        </div>
        <div className='px-6 pt-0'>
          Avartus is a web App built with React Typescript and TailwindCSS. I
          completed some of its key components like login page, user account
          setting page, adding/dropping device page and so on.
        </div>
      </div>
    </div>
  );
}

export default Avartus;
