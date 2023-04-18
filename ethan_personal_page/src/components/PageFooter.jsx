import React from "react";
import "../styles/Canvas.css";

function PageFooter() {
  return (
    <div className='Canvas'>
      <div className='pt-14'></div>
      <footer className='flex p-4 justify-center items-center'>
        <p className='text-gray-400 text-xs text-center'>
          Copyright &copy; 2023 Ethan Guo.<br /> All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default PageFooter;
