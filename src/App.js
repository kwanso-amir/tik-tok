import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./Video";
import axios from "./axios";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/v1/posts");

      setVideos(req.data);
    }
    fetchData();
  });

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map((video) => (
          <Video
            source={video.url}
            channel={video.channel}
            description={video.description}
            song={video.song}
            likes={video.likes}
            messages={video.messages}
            share={video.shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
