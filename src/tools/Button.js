import React from "react";
import "./helpers/landingButton.css";

function Button(props) {
  const { theme } = props;

  return (
    <button
      className={`btn ${theme === "dark" ? "btn-dark" : ""}`}
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
