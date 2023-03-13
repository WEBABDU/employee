import React from "react";

import "./Button.css";

import { ReactComponent as Spinner } from "./../../assets/images/form-spinner.svg";

export const Button = ({
  prepend,
  innerText,
  append,
  onClick = () => {},
  type = "button",
  className = "",
  isSubmitting = false,
  variant = "default",
  ...buttonProps
}) => {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      {...buttonProps}
      type={type}
      data-variant={variant}
    >
      <div className="btn_content">
        {isSubmitting && (
          <span>
            <Spinner />
          </span>
        )}
        <span>{prepend}</span>
        {innerText}
        <span>{append}</span>
      </div>
    </button>
  );
};
