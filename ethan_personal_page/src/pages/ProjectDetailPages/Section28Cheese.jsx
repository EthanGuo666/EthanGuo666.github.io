import React from "react";
import "../../styles/Canvas.css";
import ProjectPageHeader from "./ProjectPageHeader";
import CMU from "../../assets/CMU.jpg";
import Section28CheeseBlurred from "../../assets/Section28CheeseBlurred.jpg";
import PicturePlaceHolder from "../../assets/PicturePlaceHolder.png";
import AvartusLoginPage from "../../assets/AvartusLoginPage.jpeg";
import AvartusSettingsPage from "../../assets/AvartusSettingsPage.jpeg";
import PageFooter from "../../components/PageFooter";

function Section28Cheese() {
  return (
    <div>
      <ProjectPageHeader />

      <img
        src={Section28CheeseBlurred}
        className='w-screen h-80 object-cover'
      />
      <div className='absolute inset-0 w-full pt-32 text-center'>
        <h1 className='text-white text-4xl font-serif'>Section 28 Cheese</h1>
        <p className='text-white font-extralight italic'>
          The digitalization solution for
          <br />a prize-winning cheese manufacturer.
        </p>
      </div>

      {/* Text area within the w-screen */}
      <div className='Canvas font-serif flex justify-center text-left'>
        <div className='w-screen md:w-3/5'>
          <div className='px-6 pt-6'>
            <span className='text-2xl'>T</span>he story begins with our client,
            <span className='text-gray-400 italic'> Section 28</span>, a local
            artisan cheese maker located in South Australia. Their signature
            product, Mont Priscilla, is a semi-soft cheese that stands out due
            to the distinguishtive ash line through its centre.
          </div>

          <div className='m-6 items-center text-center'>
            <div className='flex justify-center items-center'>
              <img
                src={PicturePlaceHolder}
                className='w-3/5 rounded-md shadow-xl'
              />
            </div>
            <p className='text-xs text-gray-400'>Login Page</p>
          </div>

          <div className='px-6'>
            <p>
              The existing material management system they were using is just
              putting everything in an excel sheet. As the company made more and
              more cheese, the excel sheet gets unmanageably large. The owner of
              s28 does not plan to introduce a fully automated production line
              in order to retain the artisanal cheese flavor to the maximum.
              However, they do want a digitalization solution for their material
              management process to monitor the ripening of each piece of cheese
              and do order tracking.
            </p>
          </div>

          <div className='px-6 pt-6'>
            <p>1</p>
          </div>

          <div className='m-6 items-center text-center'>
            <div className='flex justify-center items-center'>
              <img
                src={PicturePlaceHolder}
                className='w-3/5 rounded-md shadow-xl'
              />
            </div>
            <p className='text-xs text-gray-400'>Account Settings Page</p>
          </div>

          <div className='px-6'>
            <p>p2</p>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
}

export default Section28Cheese;
