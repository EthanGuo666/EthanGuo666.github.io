import React from "react";
import { useState } from "react";
import Github from "../assets/Github.svg";
import Instagram from "../assets/Instagram.png";
import LinkedIn from "../assets/LinkedIn.svg";
import Profile from "../assets/ProfilePhoto.jpg";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

import { Link } from "react-scroll";

function HeaderBar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleClickMenu = () => {
    console.log("click on menu button");
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      <header className='flex justify-between items-center h-20 w-full'>
        <img src={Profile} alt='' className='w-12 h-12 rounded-full' />

        <div className='w-full'>
          <Link
            to='page-top'
            smooth
            duration={500}
            className='ml-6 text-gray-300 font-bold text-center hover:text-white hover:cursor-pointer transition duration-300'
          >
            Ethan Guo
          </Link>
          <button
            onClick={handleClickMenu}
            className='ml-4 text-gray-300 hover:text-white'
          >
            {!menuVisible && <ExpandCircleDownOutlinedIcon />}
            {menuVisible && <KeyboardArrowUpOutlinedIcon />}
          </button>
        </div>

        <nav className='flex'>
          <div className='flex flex-row items-center'>
            <a href='https://github.com/EasonGuo666' className=''>
              <img
                src={Github}
                className='w-7 h-7 mx-4 my=2 rounded-full bg-gray-600 hover:bg-gray-300 transition duration-300'
                alt=''
              />
            </a>

            <a href='https://www.instagram.com/guo_yixuan666/'>
              <img
                src={Instagram}
                className='w-7 h-7 mx-4 my=2 rounded-full bg-gray-200 hover:bg-white transition duration-300'
                alt=''
              />
            </a>

            <a href='https://www.linkedin.com/in/yixuan-guo-35372b1a9/'>
              <img
                src={LinkedIn}
                className='w-7 h-7 mx-4 my=2 rounded-full bg-gray-600 hover:bg-gray-300 transition duration-300'
                alt=''
              />
            </a>
          </div>
        </nav>
      </header>
      {menuVisible && <div>hello</div>}
    </div>
  );
}

export default HeaderBar;
