import "./scence.scss";
import React, { useState } from "react";

function Result({ score, click }) {
  const { A, B, C, D, E, F, G } = score;

  return (
    <div className="scence">
      <div className="result">
        {A > 2 ? (
          <p>
            你是個不誠實的實況主，總是嘴上說一套，背地裡做一套，不敢正視自己的慾望，不了解自己的內心。
          </p>
        ) : (
          <p>
            你是個誠實的實況主，懂得面對自己，理解自己的慾望，是個有一說一，不虎爛的人。
          </p>
        )}

        {G > 0 ? (
          <p>比起兄弟，女人對你來說更重要，寧可背刺手足，也不願負了愛人。</p>
        ) : (
          <p>比起女人，你更愛兄弟，甲鬼甲怪，難怪追不到女生，可憐。</p>
        )}

        {B > 0 ? (
          <p>
            你對自己充滿自信，直來直往，又或是寧願抱著被拒絕的風險，也想向他人表達自己的感覺。
          </p>
        ) : (
          <p>
            你是個比較自卑的人，不敢表達自己的情感，畏手畏腳，害怕事情的結果與自己的期待不相符。
          </p>
        )}

        {C > 0 ? (
          <p>
            比起愛情，金錢對你來說重要無比，甚至可以為它拋棄尊嚴，背棄另一半，做喪盡天良之事。
          </p>
        ) : (
          <p>
            比起錢，你更渴望愛情，不過實際上面對異性，即便表面上彬彬有禮，心裡其實想著怎麼抓勒來得，真的是噁男一個掰。
          </p>
        )}

        {D > 0 ? (
          <p>
            面對上一段感情，你總是無法放下，喜歡留戀於舊的人事物，活在自己的夢裡，無法向前看。
          </p>
        ) : (
          <p>面對上一段感情，你絲毫不念舊，冷血無情，仿佛一切與你無關。</p>
        )}

        {E > 0 ? (
          <p>
            在追求心儀的對象時，你不懂得衡量得失，優柔寡斷，不會觀察對方的反應，以為自己的付出會有回報，又傻又盤。
          </p>
        ) : (
          <p>
            在追求心儀的對象時，當你發覺已沒機會，就會快速抽離，轉換新對象，薄情寡義，見一個愛一個，渣。
          </p>
        )}

        {F > 0 ? (
          <p>你對空幹情有獨鍾，誓言要比過志祥，號最強空幹師。</p>
        ) : (
          <p>
            比起空幹，你更愛摩托搖，代表你內心如同那些電子妓女，為錢下海，號圖奇第一男妓。
          </p>
        )}
      </div>
      <div>
        <div className="Btn" onClick={click}>
          下一步
        </div>
      </div>
    </div>
  );
}

export default Result;
