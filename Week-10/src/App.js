import { useState } from 'react';
import './App.css';
import BackgroundAnimate from './BackgroundAnimate';
import InputShortener from './inputShortener';
import LinkResult from './LinkResult';

function App() {
const [inputValue,setInputvalue]=useState("");

  return (
    <div className="container">
      <InputShortener setInputvalue={setInputvalue}/>
      <BackgroundAnimate/>
      <LinkResult inputValue={inputValue}/>
    </div>
  );
}

export default App;
