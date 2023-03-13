import { get } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EmployeeForm } from "../components/Form/EmployeeForm";
import { useHttp } from "../hooks/useHttp";
import { emoployeeSchema } from "../services/helpers/validationSchemas";
import { notification } from "../services/notifications";

export const UpdateEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { request } = useHttp();

  const [employee, setEmployee] = useState();

  const fetchEmployee = useCallback(async () => {
    try {
      const response = await request(
        `${process.env.REACT_APP_API_ROOT}employees/${id}`,
        "GET",
        null
      );
      setEmployee(response);
    } catch (error) {}
  }, [request, id]);

  useEffect(() => {
    fetchEmployee();
  }, [fetchEmployee]);

  const onSuccess = () => {
    navigate("/");
    notification.success("Анкента успешно изменено!");
  };

  const onCancel = () => {
    navigate("/");
  };

  const onError = (error) => {
    navigate("/");
    notification.error(error.message);
  };

  const initialValues = {
    first_name: get(employee, "first_name"),
    last_name: get(employee, "last_name"),
    middle_name: get(employee, "middle_name"),
    avatar: get(employee, "avatar"),
    gender: get(employee, "gender"),
    position: get(employee, "position"),
    experience: get(employee, "experience"),
    hired_date: get(employee, "hired_date"),
    birth_date: get(employee, "birth_date"),
    phone_number: get(employee, "phone_number"),
    mail: get(employee, "mail"),
    adress: get(employee, "adress"),
    nationality: get(employee, "nationality"),
    marital_status: get(employee, "marital_status"),
    salary: get(employee, "salary"),
    mother_tongue: get(employee, "mother_tongue"),
    religion: get(employee, "religion"),
    working_status: get(employee, "working_status"),
    comment: get(employee, "comment"),
  };

  return (
    <>
      <EmployeeForm
        title="Изменить анкету"
        initialValues={initialValues}
        validationSchema={emoployeeSchema}
        method="PUT"
        url={`employees/${id}`}
        onSuccess={onSuccess}
        onCancel={onCancel}
        onError={onError}
      />
    </>
  );
};
