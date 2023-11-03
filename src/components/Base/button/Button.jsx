import React from "react";
import PropTypes from "prop-types";
import style from "./button.module.css";
import clsx from "clsx";
export function Button({
  variant = "contained",
  className = "",
  children,
  ...restProps
}) {
  return (
    <button
      {...restProps}
      className={clsx(
        style.button,
        className,
        variant === "contained" && style.contained,
        variant === "link" && style.link,
        variant === "outlined" && style.outlined
      )}
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
