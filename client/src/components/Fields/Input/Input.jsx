import { isFunction } from "lodash";
import React from "react";
import { ControlError } from "../../common/ControlError/ControlError";
import { ControlLabel } from "../../common/ControlLabel/ControlLabel";

import "./Input.css";

export const Input = ({
  type = "text",
  isDisabled = false,
  placeholder = "",
  inputProps = {},
  value,
  onChange = null,
  isComment = false,
  isFilter = false,
  onKeyDown = () => {},
  field = {},
  form,
  label = "",
}) => {
  return (
    <div className="form-wrapper">
      {label && <ControlLabel label={label} />}
      <label className="form-control">
        {isComment && !isFilter ? (
          <textarea
            disabled={isDisabled}
            placeholder={placeholder}
            className="form-control__input h_120"
            {...field}
            {...inputProps}
          ></textarea>
        ) : (
          <input
            type={type}
            disabled={isDisabled}
            placeholder={placeholder}
            value={value}
            onChange={(event) => {
              isFunction(onChange) ? onChange(event) : field.onChange(event);
            }}
            className="form-control__input"
            onKeyDown={onKeyDown}
            {...field}
            {...inputProps}
          />
        )}

        {/* {isFilter && (
          <input
            type={type}
            disabled={isDisabled}
            placeholder={placeholder}
            value={value}
            onChange={(event) => {
              onChange(event);
            }}
            className="form-control__input"
            {...inputProps}
          />
        )} */}
      </label>
      <ControlError field={field} form={form} />
    </div>
  );
};
