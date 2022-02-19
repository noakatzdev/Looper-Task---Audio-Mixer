import React, { useState } from "react";
import Manager from "../Manager/Manager";
import Row from "../Row/Row";
import LoopButton from "../LoopButton";
import PlayButton from "../PlayButton";
import StopButton from "../StopButton";

import song1 from "../../Loop files/_tambourine_shake_higher.mp3";
import song2 from "../../Loop files/ALL TRACK.mp3";
import song3 from "../../Loop files/B VOC.mp3";
import song4 from "../../Loop files/DRUMS.mp3";
import song5 from "../../Loop files/HE HE VOC.mp3";
import song6 from "../../Loop files/HIGH VOC.mp3";
import song7 from "../../Loop files/JIBRISH.mp3";
import song8 from "../../Loop files/LEAD 1.mp3";
import song9 from "../../Loop files/UUHO VOC.mp3";

const LoopMachine = ({ isPlaying, setIsplaying, isLoop, setIsLoop, songInfo, setSongInfo }) => {
  
  const color = [
    "AntiqueWhite",
    "Coral",
    "BurlyWood",
    "DarkSalmon",
    "IndianRed ",
    "Linen",
    "PeachPuff",
    "SandyBrown",
  ];
  const musicTracks = [
    {
      name: "_tambourine_shake_higher",
      src:  song1 ,
      color: color[0]
    },
    {
      name: "ALL TRACK",
      src:  song2 ,
      color: color[1]

    },
    {
      name: "B VOC",
      src:  song3 ,
      color: color[2]

    },
    {
      name: "DRUMS",
      src:  song4 ,    
        color: color[3]

    },
    {
      name: "HE HE VOC",
      src:  song5 ,
      color: color[4]

    },
    {
      name: "HIGH VOC",
      src:  song6 ,
      color: color[5]

    },
    {
      name: "JIBRISH",
      src:  song7 ,
      color: color[6]

    },
   
    {
      name: "LEAD 1",
      src:  song8 ,
      color: color[7]

    }
   
  ];


  const start = () => {
    setIsplaying(true);
  };
  const stop = () => {
    setIsplaying(false);
  };
  const loop = () => {
    setIsLoop(true);
    setIsplaying(true);
  };



  return (
    <div>
      <div>
        {musicTracks.map((currentMusic,id) => (
          <Row
            key={id}
          color={currentMusic.color}
          src={currentMusic.src}
          isPlaying={isPlaying}
          setIsplaying={setIsplaying}
          isLoop={isLoop}
          songInfo={songInfo}
          setSongInfo={setSongInfo}
        />
        ))}
        
      </div>
      <div className="currentTime">
            {songInfo.currentTime}
      </div>
      <LoopButton fn={loop} />
      <PlayButton fn={start} />
      <StopButton fn={stop} />
    </div>
  );
};

export default LoopMachine;
