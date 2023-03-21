import React from "react";
import "../styles/Canvas.css";

function PageFooter() {
  return (
    <div className='Canvas'>
      <div className='pt-14'></div>
      <footer className='flex p-4 justify-center items-center'>
        <p className='text-gray-400 text-xs text-center'>
          &copy;2023 Ethan Guo. All Rights Reserved. Contact:&nbsp;
          <a href='mailto:easonguo100@outlook.com'>
            easonguo100@outlook.com
          </a>
        </p>
      </footer>
    </div>
  );
}

export default PageFooter;
