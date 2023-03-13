import React from "react";

import { ReactComponent as CloseIcon } from "./../../assets/images/icon-close.svg";
import { Button } from "../Button/Button";

import noImage from "./../../assets/images/noImage.png";

import "./EmployeeCard.css";

export const EmployeeCard = ({
  image,
  first_name,
  last_name,
  middle_name,
  id,
  handleClickCard,
  onDelete,
}) => {
  return (
    <div className="card" onClick={() => handleClickCard(id)}>
      <div className="card__image">
        <img src={image ? image : noImage} alt="avatar" />
      </div>
      <div className="card__content">
        <span>{first_name}</span>
        <span>{last_name}</span>
        <span>{middle_name}</span>
      </div>

      <div className="close-btn">
        <Button
          append={<CloseIcon />}
          variant="delete"
          onClick={(event) => {
            event.stopPropagation();
            onDelete(id)}}
        />
      </div>
    </div>
  );
};
