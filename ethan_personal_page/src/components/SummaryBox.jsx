import React, { useState, useEffect } from 'react'

function SummaryBox() {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping) {
      const intervalId = setInterval(() => {
        setText((prevText) =>
          prevText.length === message.length ? prevText : message.slice(0, prevText.length + 1)
        );
      }, 200);
      return () => clearInterval(intervalId);
    }
  });

  const message = "Welcome to my space...";

  return (
    //
    <div className="flex w-full h-full bg-[url('/src/assets/Background.jpg')] bg-cover" id='page-top'>
      <div className='w-full m-auto text-center font-sans text-5xl font-bold text-white'>
        <span>Hi, I'm Ethan!<br/></span>
        {text}
        <span className="text-yellow-300">|</span>
      </div>
    </div>
  )
}

export default SummaryBox