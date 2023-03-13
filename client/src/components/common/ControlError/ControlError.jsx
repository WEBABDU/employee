import { get } from "lodash";
import React from "react";

import "./ControlError.css";

export const ControlError = ({ form, field, custom }) => {
  return (
    <>
      {form &&
        get(form.touched, field.name) &&
        get(form.errors, field.name) && (
          <span className="form-error">
            {get(form.errors, custom || field.name)}
          </span>
        )}
    </>
  );
};
