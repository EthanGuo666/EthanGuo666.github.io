import React from "react";
import PicturePlaceHolder from "../../assets/PicturePlaceHolder.png";
import QRcodeProcessFlow from "../../assets/QRcodeProcessFlow.jpg";
import QRcodeTemplate from "../../assets/QRcodeTemplate.jpg";
import PageFooter from "../../components/PageFooter";
import "../../styles/Canvas.css";
import ProjectPageHeader from "./ProjectPageHeader";

function QRcodeGenerator() {
  return (
    <div>
      <ProjectPageHeader />

      <img src={PicturePlaceHolder} className='w-screen h-80 object-cover' />
      <div className='absolute inset-0 w-full pt-32 text-center'>
        <h1 className='text-white text-4xl font-serif'>Zigzag QR Filler</h1>
        <p className='text-gray-200 font-extralight italic'>
          A high-performance AWS QR code
          <br />
          generator backend
        </p>
      </div>

      {/* Text area within the w-screen */}
      <div className='Canvas font-serif flex justify-center text-left'>
        <div className='w-screen md:w-3/5'>
          <div className='px-6 pt-6'>
            <span className='text-4xl'>T</span>
            his project is group project #1 from the course CMU-15619 Cloud
            Computing. It is a pure backend service that can do
            encoding/decoding between English words and QR codes.
          </div>

          <div className='m-6 items-center text-center'>
            <div className='flex justify-center items-center'>
              <img
                src={QRcodeProcessFlow}
                className='w-full rounded-md shadow-xl'
              />
            </div>
            <p className='text-xs text-gray-400'>
              The steps in generating a QR code
            </p>
          </div>

          <div className='px-6'>
            <p>
              The image above shows the whole process in QR code generation.
              Given a string like "CC is good", the backend will parse the
              words, fill the bitstream payload into an empty QR code in a
              special way which will be explained later, and vice versa.
              {/* We implemented the project in Java and deployed its compiled docker
              image on AWS using Kubernetes. In addition to the requirements
              mentioned earlier, we deploited the performance of back-end service and
              achieve a required response rate with a limit of budget. Our
              service eventually reached up to 70,000 rps within a hourly budget
              of $0.5/h. */}
            </p>
          </div>

          <div className='px-6 pt-6'>
            <p>The algorithm of filling the QR code.</p>
          </div>

          <div className='m-6 items-center text-center'>
            <div className='flex justify-center items-center'>
              <img
                src={QRcodeTemplate}
                className='w-4/5 rounded-md shadow-xl'
              />
            </div>
            <p className='text-xs text-gray-400'>QRcode template 25*25</p>
          </div>

          <div className='px-6'>
            <p>The above image shows a QRcode template</p>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
}

export default QRcodeGenerator;
