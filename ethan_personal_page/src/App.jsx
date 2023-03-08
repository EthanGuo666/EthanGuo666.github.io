import reactLogo from "./assets/react.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Avartus from "./pages/ProjectDetailPages/Avartus";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/projects/avartus' element={<Avartus />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
