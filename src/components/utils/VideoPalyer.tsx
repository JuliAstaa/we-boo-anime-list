"use client";

import YouTube from "react-youtube";

const VideoPlayer = ({ videoId }: any) => {
  const option = {
    width: "100%",
    height: "100%",
  };

  return (
    <div className="w-full h-full items-center justify-center flex mt-8">
      <YouTube
        className="w-full h-[15rem] items-center justify-center flex lg:h-[30rem]"
        videoId={videoId}
        onReady={(event) => event.target.pauseVideo()}
        opts={option}
      />
    </div>
  );
};
export default VideoPlayer;
