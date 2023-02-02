import reactLogo from "./assets/react.svg";

import HeaderBar from "./components/HeaderBar";
import SummaryBox from "./components/SummaryBox";

function App() {
  return (
    <div>
      <div className='mx-auto p-4 bg-gradient-to-b from-black to-transparent via-transparent fixed w-full'>
        <HeaderBar />
      </div>
      <div className="w-full h-screen">
        <SummaryBox />
      </div>
      <div className="w-full h-screen">
        Hello
      </div>
    </div>
  );
}

export default App;
