import React from "react";
import PicturePlaceHolder from "../../assets/PicturePlaceHolder.png";
import QRcodeProcessFlow from "../../assets/QRcodeProcessFlow.jpg";
import QRcodeTemplate from "../../assets/QRcodeTemplate.jpg";
import QRcodeGeneratorArchitecture from "../../assets/QRcodeGeneratorArchitecture.jpg";
import QRcodeGeneratorBlurred from "../../assets/QRcodeGeneratorBlurred.jpg";
import PageFooter from "../../components/PageFooter";
import "../../styles/Canvas.css";
import ProjectPageHeader from "./ProjectPageHeader";

function QRcodeGenerator() {
  return (
    <div>
      <ProjectPageHeader />

      <img src={QRcodeGeneratorBlurred} className='w-screen h-80 object-cover' />
      <div className='absolute inset-0 w-full pt-32 text-center'>
        <h1 className='text-white text-4xl font-serif'>QRcode Generator</h1>
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
            </p>
          </div>

          <div className='px-6 pt-6'>
            <p>
              As you see here we have a QRcode template, where only the gray
              area can be filled with the data payload, One black square
              represents a 1 and a white represents a zero. The rest part is
              fixed and consists of black and white stripes and patterns.
            </p>
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
            <p>
              According to the project requirements, we are supposed to fill in
              the QR code from the bottom right cell and follow the red line in
              a zigzag way going up and down until the whole QR code is filled
              with data we extracted from the sentence, which means we need to
              skip the squares that have been taken up by patterns and stripes.
              This is the most challenging part of this project.
            </p>
          </div>

          <div className='m-6 items-center text-center'>
            <div className='flex justify-center items-center'>
              <img
                src={QRcodeGeneratorArchitecture}
                className='w-full rounded-md shadow-xl'
              />
            </div>
            <p className='text-xs text-gray-400'>QRcode Generator Architecture</p>
          </div>

          <div className='px-6'>
            <p>
              We implemented the project in Java and deployed its compiled
              docker image on AWS using Kubernetes. In addition to the
              requirements mentioned earlier, we deploited the performance of
              back-end service and achieve a required response rate with a limit
              of budget. Our service eventually reached up to 70,000 rps within
              a hourly budget of $0.5/h.
            </p>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
}

export default QRcodeGenerator;
