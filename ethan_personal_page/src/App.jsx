import reactLogo from "./assets/react.svg";
import { HashRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Avartus from "./pages/ProjectDetailPages/Avartus";
import ZigzagQRFiller from "./pages/ProjectDetailPages/ZigzagQRFiller";

function App() {
  return (
    <div>
      {/* Todo: fix the auto scroll to bottom issue */}
      <HashRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/projects/avartus' element={<Avartus />}></Route>
          <Route path='/projects/zigzagqrfiller' element={<ZigzagQRFiller/>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
