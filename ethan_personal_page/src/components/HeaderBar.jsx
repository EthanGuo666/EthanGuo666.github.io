import React from "react";
import Profile from "../assets/ProfilePhoto.jpg";

function HeaderBar() {
  return (
    <header className='flex justify-between items-center h-20'>
      <img src={Profile} alt='' className='w-8 h-8'/>
    </header>
  );
}

export default HeaderBar;
