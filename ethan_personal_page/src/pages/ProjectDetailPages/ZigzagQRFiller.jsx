import React from "react";
import ProjectPageHeader from "./ProjectPageHeader";
import PageFooter from "../../components/PageFooter";
import PicturePlaceHolder from "../../assets/PicturePlaceHolder.png";
import "../../styles/Canvas.css";

function ZigzagQRFiller() {
  return (
    <div>
      <ProjectPageHeader />

      <img src={PicturePlaceHolder} className='w-screen h-80 object-cover' />
      <div className='absolute inset-0 w-full pt-32 text-center'>
        <h1 className='text-white text-4xl font-serif'>Zigzag QR Filler</h1>
        <p className='text-gray-200 font-extralight italic'>
          A high-performance QR code generator
          <br />
          running on AWS
        </p>
      </div>

      {/* Text area within the w-screen */}
      <div className='Canvas font-serif flex justify-center text-left'>
        <div className='w-screen md:w-3/5'>
          <div className='px-6 pt-6'>
            <span className='text-4xl'>T</span>
            his project is the group project #1 for the course CMU-15619 Cloud
            Computing. It is a pure backend service that can do
            encoding/decoding between English words and QR codes. For example,
            if it receives sentences like "The quick brown fox jumps over the
            lazy dog", it will parse it and encode it into a QR code in a base64
            string format and vice versa.
          </div>

          <div className='m-6 items-center text-center'>
            <div className='flex justify-center items-center'>
              <img
                src={PicturePlaceHolder}
                className='w-3/5 rounded-md shadow-xl'
              />
            </div>
            <p className='text-xs text-gray-400'>Pic 1</p>
          </div>

          <div className='px-6'>
            <p>
              The project objective of the course is to deploit the back-end
              services to achieve the required performance within a lower
              budget. Our service eventually reaches up to 70,000 rps within a
              hourly budget of $0.5/h.
            </p>
          </div>

          <div className='px-6 pt-6'>
            <p>
              Before we settle down on which web framework we should adopt to
              reduce latency. We did We implemented the backend service in Java
              and deployed it on AWS using Kubernetes.
            </p>
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
            <p>
              The management interface of Avartus is built with React Typescript
              and TailwindCSS. Once logging in with proper username and
              password, the user will store a JWT token in local from the
              response for future communications.
            </p>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
}

export default ZigzagQRFiller;
