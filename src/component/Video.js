import "./scence.scss";
import React, { useState } from "react";
import ReactPlayer from "react-player";

function Video({ gan }) {
  return (
    <div className={"videoCon"}>
      {gan ? (
        <ReactPlayer
          width="800px"
          height="600px"
          url={
            "https://www.youtube.com/watch?v=mdyT1Q2-3HU&t=4s&ab_channel=%E8%81%8A%E5%A4%A9%E5%AE%A4%E9%B3%A5%E4%BA%BA"
          }
          playing={true}
        />
      ) : (
        <ReactPlayer
          width="800px"
          height="600px"
          url={
            "https://www.youtube.com/watch?v=y9kRzwFvX_I&t=2s&ab_channel=%E7%88%BD%E5%95%8A%E5%88%BA%E5%95%8A"
          }
          playing={true}
        />
      )}
      <div className={"text"}>
        <p>
          任何IDEA私twitch:windchi，另外非常缺美術，有會做大便圖的歡迎一起做下一款大便遊戲。
        </p>
        <a className={"text"} href="https://ga021396.github.io/Sam1268/">
          前作:超志祥
        </a>{" "}
      </div>
    </div>
  );
}

export default Video;
