import React from "react";
import PicturePlaceHolder from "../../assets/PicturePlaceHolder.png";
import Section28CheeseBlurred from "../../assets/Section28CheeseBlurred.jpg";
import Section28CheeseLogin from "../../assets/Section28CheeseLogin.jpg";
import PageFooter from "../../components/PageFooter";
import "../../styles/Canvas.css";
import ProjectPageHeader from "./ProjectPageHeader";

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
            product, Mont Priscilla, has gained some local fame and has even won
            awards in cheese competitions. To produce a high-quality cheese,
            strict control is required at every step, from the procurement of
            raw materials to the cleaning and fermentation of the cheese. This
            is where this digitalization project comes into the picture.
          </div>

          <div className='px-6 pt-6'>
            <p>
              It is necessary to note in advance that the owner of s28 does not
              plan to introduce a fully automated production line in order to
              retain the artisanal cheese flavor to the maximum. The existing
              material management system they were using is just putting
              everything in an excel sheet. As the company made more and more
              cheese, the excel sheet becomes large and unmanageable. Therefore,
              they do want a digitalized material management program to record
              the ripening condition of each piece of cheese and do order
              tracking.
            </p>
          </div>

          <div className='m-6 items-center text-center'>
            <div className='flex justify-center items-center'>
              <img
                src={Section28CheeseLogin}
                className='w-4/5 rounded-md shadow-2xl'
              />
            </div>
            <p className='text-xs text-gray-400'>Login Page</p>
          </div>

          <div className='px-6'>
            <p>
              We finished the implementation of the frontend using ReactJS and
              the backend with Java Springboot. To enable this company in
              possible future internationalization efforts, we have designed a
              UI interface in multiple languages.
            </p>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
}

export default Section28Cheese;
