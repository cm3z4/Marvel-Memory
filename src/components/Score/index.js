import React from "react";
import "./style.css";

function Score(props) {
  return <p className="score">Score: {props.children}</p>;
}

export default Score;