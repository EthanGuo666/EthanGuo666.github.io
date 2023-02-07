import reactLogo from "./assets/react.svg";

import HeaderBar from "./components/HeaderBar";
import SummaryBox from "./components/SummaryBox";
import EducationPage from "./components/EducationPage";
import ProjectPage from "./components/ProjectPage";

function App() {
  return (
    <div>
      <div className='fixed w-full mx-auto p-4 z-50 bg-gradient-to-b from-black to-transparent'>
        <HeaderBar />
      </div>
      <div className="w-full h-screen">
        <SummaryBox />
      </div>
      <div className="w-full h-auto">
        <EducationPage />
      </div>
      <div className="w-full h-auto">
        <ProjectPage />
      </div>
    </div>
  );
}

export default App;
