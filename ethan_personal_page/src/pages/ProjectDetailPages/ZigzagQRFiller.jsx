import React from 'react';
import ProjectPageHeader from "./ProjectPageHeader";
import CMU from "../../assets/CMU.jpg";
import PicturePlaceHolder from "../../assets/PicturePlaceHolder.png";



function ZigzagQRFiller() {
  return (
    <div>
      <ProjectPageHeader />

      <img src={CMU} className='w-screen h-80 object-cover' />
      <div className='absolute inset-0 w-full pt-32 text-center'>
        <h1 className='text-white text-4xl font-serif'>Zigzag QR Filler</h1>
        <p className='text-gray-200 font-extralight italic'>
          A high-performance QR code generator<br/>running on AWS
        </p>
      </div>



    </div>
  )
}

export default ZigzagQRFiller;