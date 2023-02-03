import React from "react";
import Github from "../assets/Github.svg";
import Instagram from "../assets/Instagram.png";
import LinkedIn from "../assets/LinkedIn.svg";
import Profile from "../assets/ProfilePhoto.jpg";

function HeaderBar() {
  return (
    <header className='flex justify-between items-center h-20 w-full'>
      <img src={Profile} alt='' className='w-12 h-12 rounded-full' />

      <div className='w-full'>
        <label className='ml-6 text-gray-300 font-bold hover:text-white'>Ethan Guo</label>
      </div>

      <nav className='flex'>
        <div className='flex flex-row items-center'>
          <a href='https://github.com/EasonGuo666' className=''>
            <img
              src={Github}
              className='w-7 h-7 mx-4 my=2 rounded-full bg-gray-600 hover:bg-gray-300'
              alt=''
            />
          </a>

          <a href='https://www.instagram.com/guo_yixuan666/'>
            <img
              src={Instagram}
              className='w-7 h-7 mx-4 my=2 rounded-full bg-gray-200 hover:bg-white '
              alt=''
            />
          </a>

          <a href='https://www.linkedin.com/in/yixuan-guo-35372b1a9/'>
            <img
              src={LinkedIn}
              className='w-7 h-7 mx-4 my=2 rounded-full bg-gray-600 hover:bg-gray-300'
              alt=''
            />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default HeaderBar;
