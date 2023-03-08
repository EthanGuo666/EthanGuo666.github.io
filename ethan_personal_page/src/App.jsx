import reactLogo from "./assets/react.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeaderBar from "./components/HeaderBar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <div className='fixed w-full mx-auto p-4 z-50 bg-gradient-to-b from-black to-transparent'>
        <HeaderBar />
      </div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/haha' element={"haha"}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
