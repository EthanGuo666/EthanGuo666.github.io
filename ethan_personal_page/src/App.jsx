import reactLogo from "./assets/react.svg";
import { HashRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Avartus from "./pages/ProjectDetailPages/Avartus";
import QRcodeGenerator from "./pages/ProjectDetailPages/QRcodeGenerator";
import Section28Cheese from "./pages/ProjectDetailPages/Section28Cheese";
import SparkNewsAnalysis from "./pages/ProjectDetailPages/SparkNewsAnalysis";

function App() {
  return (
    <div>
      {/* Todo: fix the auto scroll to bottom issue */}
      <HashRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/projects/avartus' element={<Avartus />}></Route>
          <Route path='/projects/qrcodegenerator' element={<QRcodeGenerator/>}></Route>
          <Route path='/projects/section28cheese' element={<Section28Cheese/>}></Route>
          <Route path='/projects/sparknewsanalysis' element={<SparkNewsAnalysis/>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
