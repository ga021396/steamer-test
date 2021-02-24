import React, { useState } from "react";
import "./App.scss";
import Scence from "./component/Scence";
import Result from "./component/Result";
import Video from "./component/Video";

function App() {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState({
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
    G: 0,
  });

  const scenceData = [
    {
      des: "我是一位英雄聯盟實況主。",
      A: "是",
      B: "否",
      Afn: function () {
        handleCount();
        setScore({ ...score, A: score.A + 1 });
      },
      Bfn: function () {
        handleCount();
      },
    },
    {
      des: "我開實況賺不賺錢無所謂，大家看的開心就好。",
      A: "是",
      B: "否",
      Afn: function () {
        handleCount();
        setScore({ ...score, A: score.A + 1 });
      },
      Bfn: function () {
        handleCount();
      },
    },
    {
      des: "不論是免費仔或是大乾爹，你們的意見我都會好好採納。",
      A: "是",
      B: "否",
      Afn: function () {
        handleCount();
        setScore({ ...score, A: score.A + 1 });
      },
      Bfn: function () {
        handleCount();
      },
    },
    {
      des: "即使被抖黑歷史影片，被歐富寶嘲諷，我也從不生氣。",
      A: "是",
      B: "否",
      Afn: function () {
        handleCount();
        setScore({ ...score, A: score.A + 1 });
      },
      Bfn: function () {
        handleCount();
      },
    },
    {
      des: "我覺得____是一家比較優秀的娛樂公司。",
      A: "凱琪娛樂",
      B: "電狼娛樂",
      Afn: function () {
        handleCount();
        setScore({ ...score, G: score.G + 1 });
      },
      Bfn: function () {
        handleCount();
      },
    },
    {
      des: "我與別的實況主合作完後，我想給他一個",
      A: "愛心",
      B: "讚",
      Afn: function () {
        handleCount();
        setScore({ ...score, B: score.B + 1 });
      },
      Bfn: function () {
        handleCount();
      },
    },
    {
      des: "時間到了七點三十分，肚子稍微感到飢餓，我想來點",
      A: "胖胖的布丁",
      B: "蹦米糠",
      Afn: function () {
        handleCount();
        setScore({ ...score, C: score.C + 1 });
      },
      Bfn: function () {
        handleCount();
      },
    },
    {
      des: "不管斗內多少，我都不會拋棄自己的尊嚴。",
      A: "是",
      B: "否",
      Afn: function () {
        handleCount();
        setScore({ ...score, A: score.A + 1 });
      },
      Bfn: function () {
        handleCount();
      },
    },
    {
      des: "即使和前任分手，我心中還是忘不了他/她。",
      A: "是",
      B: "否",
      Afn: function () {
        handleCount();
        setScore({ ...score, D: score.D + 1 });
      },
      Bfn: function () {
        handleCount();
      },
    },
    {
      des: "即使我告白失敗，我還是會默默的為他/她付出。",
      A: "是",
      B: "否",
      Afn: function () {
        handleCount();
        setScore({ ...score, E: score.E + 1 });
      },
      Bfn: function () {
        handleCount();
      },
    },
    {
      des: "收到了爸爸的一萬塊，我打算__回饋乾爹。",
      A: "空幹",
      B: "摩托搖",
      Afn: function () {
        handleCount();
        setScore({ ...score, F: score.F + 1 });
      },
      Bfn: function () {
        handleCount();
      },
    },
  ];

  const handleCount = () => {
    setCount(count + 1);
  };
  console.log(count);
  return (
    <div className="app">
      <div class="open">
        <span>兄</span>
        <span>弟</span>
        <span>幫</span>
        <span>實</span>
        <span>況</span>
        <span>心</span>
        <span>理</span>
        <span>測</span>
        <span>驗</span>
      </div>
      {count === 0 && (
        <button id="startBtn" onClick={handleCount}>
          開始
        </button>
      )}
      {count > 0 && count < 12 && <Scence props={scenceData[count - 1]} />}
      {count === 12 && <Result score={score} click={handleCount}></Result>}
      {count === 13 && <Video gan={score.F}></Video>}

      <div id="sam"></div>
      <div id="RB"></div>
      <div id="wei"></div>
      <div id="lee"></div>
    </div>
  );
}

export default App;
