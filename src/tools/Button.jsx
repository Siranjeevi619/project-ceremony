import React from "react";
import "../assets/styles/landingButton.css";

function Button(props) {
  const { theme } = props;

  return (
    <button
      className={`btn  btn-sm ${theme === "dark" ? "btn-dark" : "btn-secondary"}`}
      onClick={props.onClickHandler}
    >
      <span className="btn-span">
        {props.context}
        <span className="btn-icons">
          <i className={props.haveIcon}></i>
        </span>
      </span>
    </button>
  );
}

export default Button;