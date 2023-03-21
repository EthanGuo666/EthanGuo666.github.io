import React from "react";
import "../../styles/Canvas.css";
import ProjectPageHeader from "./ProjectPageHeader";
import CMU from "../../assets/CMU.jpg";
import PicturePlaceHolder from "../../assets/PicturePlaceHolder.png";
import PageFooter from "../../components/PageFooter";

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
          he concept of Avartus was first conceived in 2020 to assist faculty
          members with their daily work at CMU. During the covid lockdown, the
          campus complied with the SA government protocol that restricted the
          access to public spaces for people who have symptoms. The university
          needed a solution to manipulate the teaching facilities in building
          remotely. This is when Avartus proved to be an indispensable tool.
        </div>

        <div className='px-6 pt-6'>
          Fortunately, I joined this innovative project with a group of interns
          from CMU. Before we start working on the project, it already had a
          functioning backend built in Golang but there is no UI implementation
          at that point. So our job in this project was to construct its
          frontend from the scratch. I completed some of its key components and
          functions like login, a series of settings related to user account,
          adding/dropping device page and so on.
        </div>

        {/* todo: image and text responsive to the screen size */}
        <div className='m-6 items-center text-center'>
          <div className='flex justify-center items-center'>
            <img src={PicturePlaceHolder} className='w-1/2 rounded-2xl' />
          </div>
          <p className='text-xs text-gray-400'>Avartus Login Page</p>
        </div>

        <div className='px-6 pt-0'>
          The management interface of Avartus is built with React Typescript and
          TailwindCSS. Once loging in with proper username and password, the
          user will store a JWT token in local from the response for future
          communications.
        </div>
      </div>
      <PageFooter />
    </div>
  );
}

export default Avartus;
