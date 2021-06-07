import React, { useState, useRef } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({
  source,
  channel,
  description,
  song,
  likes,
  messages,
  shares,
}) {
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
        src={source}
        className="video__player"
        loop
        onClick={handleVidePress}
        ref={videoRef}
      ></video>

      <VideoFooter
        channel={channel}
        description={description}
        song={song}
      />
      <VideoSidebar
        likes={likes}
        messages={messages}
        shares={shares}
      />
    </div>
  );
}

export default Video;
