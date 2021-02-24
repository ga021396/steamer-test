import "./scence.scss";
import React, { useState } from "react";

function Scence({ props }) {
  return (
    <div className="scence">
      <div className="des">{props?.des}</div>
      <div>
        <div className="Btn" onClick={props?.Afn}>
          {props?.A}
        </div>
        <div className="Btn" onClick={props?.Bfn}>
          {props?.B}
        </div>
      </div>
    </div>
  );
}

export default Scence;
