import React from "react";
import PropTypes from "prop-types";
import style from "./button.module.css";
export function Button({
  variant = "contained",
  className = "",
  children,
  ...restProps
}) {
  return (
    <button
      {...restProps}
      className={`${style.button} ${style[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(["contained", "link", "outlined"]),
  className: PropTypes.string,
  children: PropTypes.node,
};
