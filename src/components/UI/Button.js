import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
    //{props.type || "button"} props.type 정의되지 않으면  button 으로 정의
  );
};

export default Button;
