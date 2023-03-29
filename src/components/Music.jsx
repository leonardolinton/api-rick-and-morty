import React from "react";
import ReactAudioPlayer from "react-audio-player";
import song from "../assets/music.mp3";

export default function Music() {
  return <ReactAudioPlayer src={song} autoPlay loop volume={0.1}/>;
}
