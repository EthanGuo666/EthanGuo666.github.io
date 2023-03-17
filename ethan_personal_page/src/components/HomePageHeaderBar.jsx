import React, { useState, useRef, useEffect } from "react";
import Github from "../assets/Github.svg";
import Instagram from "../assets/Instagram.png";
import LinkedIn from "../assets/LinkedIn.svg";
import Profile from "../assets/ProfilePhoto.jpg";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import SourceIcon from '@mui/icons-material/Source';

import { Link } from "react-scroll";

function HomePageHeaderBar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutsideOfMenu = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideOfMenu);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideOfMenu);
    };
  }, [menuRef]);

  return (
    <div>
      <header className='flex justify-between items-center h-20 w-full'>
        <img src={Profile} alt='' className='w-12 h-12 rounded-full' />

        <div className='w-full'>
          <Link
            to='page-top'
            smooth
            duration={500}
            className='ml-5 text-gray-300 font-bold text-center hover:text-white hover:cursor-pointer transition duration-300'
          >
            Ethan Guo
          </Link>
          <button
            onClick={() => setMenuVisible(!menuVisible)}
            className='ml-5 text-gray-300 hover:text-white'
          >
            {!menuVisible && <ExpandCircleDownOutlinedIcon />}
            {menuVisible && <KeyboardArrowUpOutlinedIcon />}
          </button>
        </div>

        <nav className='flex'>
          <div className='flex flex-row items-center'>
            <a href='https://github.com/EthanGuo666' className=''>
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
      {menuVisible && (
        <div ref={menuRef} className='flex-x'>
          <Link
            to='page-top'
            smooth
            duration={500}
            className='ml-2 mr-3 text-white font-bold text-center hover:cursor-pointer transition duration-300'
            onClick={() => setMenuVisible(!menuVisible)}
          >
            <HomeIcon />
            &nbsp;Home
          </Link>
          <Link
            to='education-top'
            smooth
            duration={500}
            className='ml-2 mr-3 text-white font-bold text-center hover:cursor-pointer transition duration-300'
            onClick={() => setMenuVisible(!menuVisible)}
          >
            <SchoolIcon />
            &nbsp;Education
          </Link>
          <Link
            to='projects-top'
            smooth
            duration={500}
            className='ml-2 mr-3 text-white font-bold text-center hover:cursor-pointer transition duration-300'
            onClick={() => setMenuVisible(!menuVisible)}
          >
            <SourceIcon />
            &nbsp;Projects
          </Link>
        </div>
      )}
    </div>
  );
}

export default HomePageHeaderBar;
