import React, {useEffect} from "react";
import "../../styles/Canvas.css";
import ProjectPageHeader from "./ProjectPageHeader";
import CMU from "../../assets/CMU.jpg";
import PicturePlaceHolder from "../../assets/PicturePlaceHolder.png";
import AvartusLoginPage from "../../assets/AvartusLoginPage.jpeg";
import AvartusSettingsPage from "../../assets/AvartusSettingsPage.jpeg";
import PageFooter from "../../components/PageFooter";

function Avartus() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

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

      {/* Text area within the w-screen */}
      <div className='Canvas font-serif flex justify-center text-left'>
        <div className='w-screen md:w-3/5'>
          <div className='px-6 pt-6'>
            <span className='text-4xl'>T</span>
            he concept of Avartus was first conceived in 2020 to assist faculty
            members with their daily work at CMU. During the covid lockdown, the
            campus complied with the SA government protocol that restricted
            access to public spaces for people having symptoms. The university
            needed a solution to manipulate the teaching facilities in the
            building remotely. That is when Avartus proved to be an
            indispensable tool.
          </div>

          <div className='m-6 items-center text-center'>
            <div className='flex justify-center items-center'>
              <img src={AvartusLoginPage} className='w-3/5 rounded-md shadow-xl' />
            </div>
            <p className='text-xs text-gray-400'>Login Page</p>
          </div>

          <div className='px-6'>
            <p>
              Fortunately, I joined this innovative project with a group of
              interns from CMU. Before we started working on the project, it
              already had a functioning backend built in Golang, but there was
              no UI implementation. So our job in this project was to construct
              its front end from the scratch. I completed some of its key
              components and functions like login, a series of settings related
              to the user account, adding/dropping device page, and so on.
            </p>
          </div>

          <div className='m-6 items-center text-center'>
            <div className='flex justify-center items-center'>
              <img src={AvartusSettingsPage} className='w-3/5 rounded-md shadow-xl' />
            </div>
            <p className='text-xs text-gray-400'>Account Settings Page</p>
          </div>

          <div className='px-6'>
            <p>
              The management interface of Avartus is built with React Typescript
              and TailwindCSS. Once logging in with proper username and password,
              the user will store a JWT token in local from the response for
              future communications.
            </p>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
}

export default Avartus;
