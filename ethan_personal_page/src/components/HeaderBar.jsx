import React from "react";
import Github from "../assets/Github.svg";
import Instagram from "../assets/Instagram.svg";
import LinkedIn from "../assets/LinkedIn.svg";
import Profile from "../assets/ProfilePhoto.jpg";

function HeaderBar() {
  return (
    <header className='flex justify-between items-center h-20'>
      <img src={Profile} alt='' className='w-12 h-12 rounded-full' href='' />

      <div className='container'>
        <button className='ml-6 text-white font-bold hover:text-gray-400 '>
          {"Education"}
        </button>

        <button className='ml-6 text-white font-bold hover:text-gray-400 '>
          {"Projects"}
        </button>
      </div>

      <nav className='flex'>
        <div className='flex flex-row items-center'>
          <a href='https://github.com/EasonGuo666' className=''>
            <img
              src={Github}
              className='w-7 h-7 mx-4 my=2 hover:bg-gray-300 hover:rounded-full'
              alt=''
            />
          </a>

          <a href='https://www.instagram.com/guo_yixuan666/'>
            <img
              src={Instagram}
              className='w-7 h-7 mx-4 my=2 hover:bg-gray-300 hover:rounded-full'
              alt=''
            />
          </a>

          <a href='https://www.linkedin.com/in/yixuan-guo-35372b1a9/'>
            <img
              src={LinkedIn}
              className='w-7 h-7 mx-4 my=2 hover:fill-slate-700'
              alt=''
            />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default HeaderBar;
