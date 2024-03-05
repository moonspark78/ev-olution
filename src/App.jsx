import { useState } from 'react';
import './App.css';
import { Background } from "./Components/Background";
import heroData from './Data/heroData';

function App() {

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false); 


  return (
    <div>
      <Background heroCount={heroCount} playStatus={playStatus}/>
    </div>
  );
}

export default App;
