import React from "react";
import { useNavigate } from "react-router-dom";

import { emoployeeSchema } from "../services/helpers/validationSchemas";
import { EmployeeForm } from "../components/Form/EmployeeForm";
import { notification } from "../services/notifications";

export const CreateEmployee = () => {
  const navigate = useNavigate();

  const onSuccess = () => {
    navigate("/");
    notification.success("Анкета успешно создана!")
  };

  const onCancel = () => {
    navigate("/");
  };

  const onError = (error) => {
    navigate("/");
    notification.error(error.message)
  }

  const initialValues = {
    first_name: "",
    last_name: "",
    middle_name: "",
    avatar: "",
    gender: "",
    position: "",
    experience: "",
    hired_date: Date.now(),
    birth_date: Date.now(),
    phone_number: "",
    mail: "",
    adress: "",
    nationality: "",
    marital_status: "",
    salary: "",
    mother_tongue: "",
    religion: "",
    working_status: "",
    comment: "",
  };

  return (
    <>
      <EmployeeForm
        initialValues={initialValues}
        validationSchema={emoployeeSchema}
        onCancel={onCancel}
        onSuccess={onSuccess}
        onError={onError}
        title="Создать анкету"
        url={"employees"}
      />
    </>
  );
};
