import { useState } from "react";
import reactLogo from "./assets/react.svg";

import HeaderBar from "../src/components/HeaderBar";

function App() {
  return (
    <div className='mx-auto p-4 bg-gradient-to-b from-black to-white'>
      <HeaderBar />
    </div>
  );
}

export default App;
