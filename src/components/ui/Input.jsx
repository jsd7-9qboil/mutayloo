import React, { useState } from "react";

const Input = React.forwardRef(
  ({ className, type, value, onChange, ...others }, ref) => {
    return (
      <input
        className={`input ${className}`}
        type={type}
        ref={ref}
        value={value}
        onChange={onChange}
        {...others}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
