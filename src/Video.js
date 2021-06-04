import React, { useState, useRef } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from './VideoSidebar'

function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVidePress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        onClick={handleVidePress}
        className="video__player"
        loop
        ref={videoRef}
        src="https://v16m.tiktokcdn.com/502312d0214f36ffc3ef2097f65ca6ea/60b914fc/video/tos/alisg/tos-alisg-pve-0037c001/64f7adb0ba40412cbe59f16ed9302e06/?a=1233&br=1422&bt=711&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202106031144170102341061433D05AE04&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajp0bXZmM2ZvNTMzODczM0ApPDdoaGc2ZjxlNzU4aDo2N2cvL2BnaW0yb29gLS1kMTRzc2IuMGEvNWAtNF4tLi9fMWE6Yw%3D%3D&vl=&vr="
      ></video>

      <VideoFooter channel={"ssssangha"} description={"WOW EPIC MERN STACK TIK TIK"} song={"99 problems but REACT ain't one"}  />
      <VideoSidebar likes={111} messages={67} shares={22} />
    </div>
  );
}

export default Video;
