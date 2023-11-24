import React, {useEffect} from "react";
import QRcodeGeneratorArchitecture from "../../assets/QRcodeGeneratorArchitecture.jpg";
import QRcodeGeneratorBlurred from "../../assets/QRcodeGeneratorBlurred.jpg";
import QRcodeProcessFlow from "../../assets/QRcodeProcessFlow.jpg";
import QRcodeTemplate from "../../assets/QRcodeTemplate.jpg";
import PageFooter from "../../components/PageFooter";
import "../../styles/Canvas.css";
import ProjectPageHeader from "./ProjectPageHeader";

function QRcodeGenerator() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <ProjectPageHeader />

      <img
        src={QRcodeGeneratorBlurred}
        className='w-screen h-80 object-cover'
      />
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
              words, fill the bitstream payload into an empty QR code, and vice
              versa.
            </p>
          </div>

          <div className='px-6 pt-6'>
            <p>
              As you see here we have a 25*25 QR code template. But only the
              gray area can be filled with the data payload, the rest part which
              formed by black and white stripes and patterns is fixed. One black
              square represents a 1 and a white represents a zero.
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
              the QR code from the right bottom cell and follow the red line
              going up and down all the way until we fill the whole QR code with
              data we extracted from the sentence, which means we need to skip
              the squares that have been occupied by patterns and stripes.
            </p>
          </div>

          <div className='px-6 pt-6'>
            <p>
              It is easy to think of a brutal force solution. First, we need a
              HashMap to record the mapping from a linear string to the position
              in a 2D QR code. It is simple but the cost is you have to access
              the HashMap everytime you want to fill in a bit.
            </p>
          </div>

          <div className='px-6 pt-6'>
            <p>
              There is a more elegent solution to this problem. We can traverse
              from the right bottom of the QR code, and fill 2 squares at one
              time. Use a direction flag to mark whether we are moving upward or
              downward. If the current position is in the patterns or stripes,
              we move to the next position. If the current position is the
              border of the QR code, change the direction flag.
            </p>
          </div>

          <div className='m-6 items-center text-center'>
            <div className='flex justify-center items-center'>
              <img
                src={QRcodeGeneratorArchitecture}
                className='w-full rounded-md shadow-xl'
              />
            </div>
            <p className='text-xs text-gray-400'>
              QRcode Generator Architecture
            </p>
          </div>

          <div className='px-6'>
            <p>
              We implemented the project in Java and deployed its compiled
              docker image on AWS using Kubernetes. To further fine-tuning the
              performance of this Java service, we deploited its performance and
              achieved an RPS (response per second) of up to 70,000 within a
              hourly budget of $0.5/h.
            </p>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
}

export default QRcodeGenerator;
