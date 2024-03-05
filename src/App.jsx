import { useState } from 'react';
import './App.css';
import { Background } from "./Components/Background";
import { Navbar } from "./Components/Navbar";
import { Hero } from "./Components/Hero";
import heroData from './Data/heroData';

function App() {

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false); 


  return (
    <div>
      <Navbar/>
      <Background heroCount={heroCount} playStatus={playStatus}/>
      <Hero heroCount={heroCount} setHeroCount={setHeroCount} playStatus={playStatus} setPlayStatus={setPlayStatus} data={heroData}/>
    </div>
  );
}

export default App;
