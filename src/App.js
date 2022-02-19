import logo from './logo.svg';
import './App.css';
import LoopMachine from './components/LoopMachine/LoopMachine';
import {useState} from 'react';
function App() {
  const [isPlaying,setIsplaying] = useState(false);
  const [isLoop,setIsLoop] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    volume: 0,
  });

  return (
    <div className="App">
     <LoopMachine isPlaying={isPlaying} setIsplaying={setIsplaying} isLoop={isLoop} setIsLoop={setIsLoop} songInfo={songInfo} setSongInfo={setSongInfo}></LoopMachine>
    </div>
  );
}

export default App;
