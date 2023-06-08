import React from "react";
import "../../styles/Canvas.css";
import ProjectPageHeader from "./ProjectPageHeader";
import PageFooter from "../../components/PageFooter";
import LinkCollection from "../../assets/LinkCollection.png";
import TextCollection from "../../assets/TextCollection.png";
import SparkNewsAnalysisBlurred from "../../assets/SparkNewsAnalysisBlurred.jpg";
import SparkNewsAnalysisCompleteFlow from "../../assets/SparkNewsAnalysisCompleteFlow.png";
import SparkNewsAnalysisSkipGram from "../../assets/SparkNewsAnalysisSkipGram.png";
import SparkNewsAnalysisWord2Vec from "../../assets/SparkNewsAnalysisWord2Vec.png";

function SparkNewsAnalysis() {
  return (
    <div>
      <ProjectPageHeader />

      <img
        src={SparkNewsAnalysisBlurred}
        className='w-screen h-80 object-cover'
      />
      <div className='absolute inset-0 w-full pt-32 text-center'>
        <h1 className='text-white text-4xl font-serif'>Spark News Analysis</h1>
        <p className='text-white font-extralight italic'>
          A data analysis pipeline with Apache Spark
        </p>
      </div>

      {/* Text area within the w-screen */}
      <div className='Canvas font-serif flex justify-center text-left'>
        <div className='w-screen md:w-3/5'>
          <div className='px-6 pt-6'>
            <span className='text-4xl'>T</span>
            his is the graduation thesis project for my bachelor degree. It is a
            one-stop data analysis pipeline from data collection, processing to
            visualization.
          </div>

          <div className='m-6 items-center text-center'>
            <div className='flex justify-center items-center'>
              <img
                src={SparkNewsAnalysisCompleteFlow}
                className='w-4/5 rounded-md shadow-xl'
              />
            </div>
            <p className='text-xs text-gray-400'>
              The complete flow of the project
            </p>
          </div>

          <div className='px-6'>
            <p>
              Due to the breakout of Covid-19, we didn't have the chance to
              utilize the cluster in the school. Therefore, to execute the
              computation, I used two VMs running on my physical PC to simulate
              the cluster. Looking back now, I feel I was so silly. It would not
              cost too much to lease a cluster with Spark environment configured
              from AliCloud or AWS, but it would have been a lot faster. It's
              amazing that during the defense, no one brought up this point.🤫 I
              guess they were just being nice. Not judging anyone, I love BIT
              very much...lol
            </p>
          </div>

          <div className='m-6 items-center text-center'>
            <div className='flex justify-center items-center'>
              <img
                src={LinkCollection}
                className='w-4/5 rounded-md shadow-xl'
              />
            </div>
            <p className='text-xs text-gray-400'>News url link collection</p>
          </div>

          <div className='m-6 items-center text-center'>
            <div className='flex justify-center items-center'>
              <img
                src={TextCollection}
                className='w-4/5 rounded-md shadow-xl'
              />
            </div>
            <p className='text-xs text-gray-400'>News content collection</p>
          </div>

          <div className='px-6'>
            <p>
              I used the classic beautifulsoup to scrap data from the original
              website. The urls that I collected were stored in a txt file for
              later use. Then, my script would brutalforcely visit all the urls
              to grab every single news article from the website using python.
              This work took about one week because there were always tricky
              bugs coming out and the data was noticiably large.
            </p>
          </div>

          <div className='m-6 items-center text-center'>
            <div className='flex justify-center items-center'>
              <img
                src={SparkNewsAnalysisSkipGram}
                className='w-full rounded-md shadow-xl'
              />
            </div>
            <p className='text-xs text-gray-400'>Skip gram sampling</p>
          </div>

          <div className='m-6 items-center text-center'>
            <div className='flex justify-center items-center'>
              <img
                src={SparkNewsAnalysisWord2Vec}
                className='w-full rounded-md shadow-xl'
              />
            </div>
            <p className='text-xs text-gray-400'>Word to vector</p>
          </div>

          <div className='px-6'>
            <p>
              After the data collection, I used a stop word list to filter out
              the words that appears commonly but does not contain much useful
              information, like "the", "a", "an", etc. Then, I used a tokenizor
              to split the document into words. The next step is to use the
              words to generate vectors. It took me a lot of time to figure out
              the mechanism of Spark, and its APIs.
            </p>
          </div>

          <div className='px-6 pt-6'>
            <p>
              You can find the code for this project on my github repo.{" "}
              <a
                className='text-blue-400'
                href='https://github.com/EthanGuo666/SparkNewsAnalysis'
              >
                Spark News Analysis
              </a>
            </p>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
}

export default SparkNewsAnalysis;
