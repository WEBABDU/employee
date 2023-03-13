import React from "react";
import { Button } from "../Button/Button";
import { Input } from "../Fields/Input/Input";

export const Filter = ({
  value,
  onChange,
  onClick,
  onCancel,
  handleKeyPress,
}) => {
  return (
    <div
      className="mt mb"
      style={{ "--margin-top": "30px", "--margin-bottom": "40px" }}
    >
      <h4>Фильтры</h4>
      <div className="filter row ">
        <div className="col-lg-3">
          <Input
            isFilter
            placeholder="Введите имя сотрудника"
            onChange={onChange}
            value={value}
            onKeyDown={handleKeyPress}
          />
        </div>
        <div className="col-lg-6 flex gap">
          <Button innerText="Сбросить" onClick={onCancel} variant="cancel" />
          <Button innerText="Применить" onClick={onClick} />
        </div>
      </div>
    </div>
  );
};
