import React from "react";
import ReactDatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { ControlError } from "../../common/ControlError/ControlError";
import { ControlLabel } from "../../common/ControlLabel/ControlLabel";
import "./DatePicker.css";

export const DatePicker = ({ label, field, form }) => {
  return (
    <div className="custom-datepicker">
      <ControlLabel label={label} />
      <ReactDatePicker
        selected={field.value}
        dateFormat="dd/MM/yyyy"
        onChange={(date) => {
          form.setFieldValue(field.name, new Date(date).getTime());
        }}
      />
      <ControlError field={field} form={form} />
    </div>
  );
};
