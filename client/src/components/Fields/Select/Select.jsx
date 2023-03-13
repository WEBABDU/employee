import React from "react";
import SelectComponent from "react-select";
import { isFunction, get } from "lodash";

import "./Select.css";
import { ControlLabel } from "../../common/ControlLabel/ControlLabel";
import { ControlError } from "../../common/ControlError/ControlError";

export const Select = ({
  label = "",
  value,
  placeholder = "",
  options = [],
  className = "",
  isMulti = false,
  isDisabled = false,
  isSearchable = false,
  isClearable = false,
  defaultValue,
  optionLabel = "label",
  optionValue = "value",
  onValueChange,
  field,
  form,
}) => {
  const handleChange = (option, action) => {
    form.setFieldValue(field.name, option[optionValue]);
    onValueChange && onValueChange(option);
  };

  const handleBlur = (event) => {
    form.setFieldTouched(field.name, true);
  };

  return (
    <>
      <ControlLabel label={label} />
      <div className="select-wrapper">
        <SelectComponent
          defaultValue={defaultValue}
          value={
            options
              ? options.find((option) => option.value === field.value)
              : value
          }
          placeholder={placeholder}
          getOptionLabel={(option) =>
            isFunction(optionLabel)
              ? optionLabel(option)
              : get(option, optionLabel)
          }
          getOptionValue={(option) =>
            isFunction(optionValue)
              ? optionLabel(option)
              : get(option, optionValue)
          }
          isDisabled={isDisabled}
          isMulti={isMulti}
          isSearchable={isSearchable}
          isClearable={isClearable}
          blurInputOnSelect={true}
          classNamePrefix="select"
          options={options}
          onChange={handleChange}
          onBlur={handleBlur}
          // menuIsOpen={true}
        />

        <ControlError form={form} field={field} />
      </div>
    </>
  );
};
