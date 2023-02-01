import reactLogo from "./assets/react.svg";

import HeaderBar from "../src/components/HeaderBar";

function App() {
  return (
    <div className="bg-[url('./src/assets/Background.jpg')]">
      <div className='mx-auto p-4 bg-gradient-to-b from-black to-transparent via-transparent'>
        <HeaderBar />
      </div>
      <div className='container'>{"Hello"}</div>
    </div>
  );
}

export default App;
