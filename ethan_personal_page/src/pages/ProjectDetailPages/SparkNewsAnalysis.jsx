import React from "react";
import "../../styles/Canvas.css";
import ProjectPageHeader from "./ProjectPageHeader";
import CMU from "../../assets/CMU.jpg";
import PicturePlaceHolder from "../../assets/PicturePlaceHolder.png";
import AvartusLoginPage from "../../assets/AvartusLoginPage.jpeg";
import AvartusSettingsPage from "../../assets/AvartusSettingsPage.jpeg";
import PageFooter from "../../components/PageFooter";

function SparkNewsAnalysis() {
  return (
    <div>
      <ProjectPageHeader />

      <img src={PicturePlaceHolder} className='w-screen h-80 object-cover' />
      <div className='absolute inset-0 w-full pt-32 text-center'>
        <h1 className='text-white text-4xl font-serif'>Spark News Analysis</h1>
        <p className='text-gray-200 font-extralight italic'>
          Undergraduate thesis project:
          <br />a data analysis pipeline with Apache Spark
        </p>
      </div>

      {/* Text area within the w-screen */}
      <div className='Canvas font-serif flex justify-center text-left'>
        <div className='w-screen md:w-3/5'>
          <div className='px-6 pt-6'>
            <span className='text-4xl'>T</span>
            he
          </div>

          <div className='m-6 items-center text-center'>
            <div className='flex justify-center items-center'>
              <img
                src={PicturePlaceHolder}
                className='w-3/5 rounded-md shadow-xl'
              />
            </div>
            <p className='text-xs text-gray-400'>pic 1</p>
          </div>

          <div className='px-6'>
            <p>p1</p>
          </div>

          <div className='m-6 items-center text-center'>
            <div className='flex justify-center items-center'>
              <img
                src={PicturePlaceHolder}
                className='w-3/5 rounded-md shadow-xl'
              />
            </div>
            <p className='text-xs text-gray-400'>pic 2</p>
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

export default SparkNewsAnalysis;
