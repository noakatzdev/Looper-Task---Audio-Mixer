import React, { useState, useRef, useEffect } from "react";
import MuteButton from "../MuteButton/MuteButton";
import { PinDropSharp } from "@material-ui/icons";
//import AudioPlayer from "react-h5-audio-player";
//import "react-h5-audio-player/lib/styles.css";

require("../../index.css");

const Row = (props) => {
    const color = props.color;
  const [mute, setMute] = useState(false);
  const audioRef = useRef();
  
   const timeUpdateHandler = (e) => {
    const current = Math.round(e.target.currentTime);
    const duration = e.target.duration;

    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const percentage = Math.round((roundedCurrent / roundedDuration) * 100);
    props.setSongInfo({
      ...props.songInfo,
      currentTime: current,
      duration: roundedDuration,

      volume: e.target.volume,
    });
  };
  useEffect(() => {
    !props.isPlaying ? audioRef.current.pause() : audioRef.current.play();
    props.isLoop ? audioRef.current.play() : audioRef.current.loop=true;
  }, [props.isPlaying, props.isLoop]);

  const handleMute = () => {
    setMute(!mute);
    console.log(mute);
  };

  const handleStart = () => {
    audioRef.current.play();
  };
  const handleSlider = (e) => {
      audioRef.current.currentTime = Math.round(e.target.value);
      props.setSongInfo  ({...props.songInfo, currentTime: Math.round(e.target.value)})
  }
  return (
    <div className={color } id="trackContainer">
      <MuteButton fn={handleMute} />
      
      <audio
      className="timeline"
        // controls
        loop
        ref={audioRef}
        autoPlay={false}
        muted={mute}
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
      >
        <source src={props.src} type="audio/mpeg" />
      </audio>
      <input id="slider" onChange={handleSlider} value={props?.songInfo?.currentTime} min={0} max={17 } className="sliderRange"  type="range" />
    </div>
  );
};

export default Row;
