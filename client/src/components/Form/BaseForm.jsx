import React from "react";

import { Formik, Form } from "formik";

export const BaseForm = ({
  url,
  method = "POST",
  initialValues,
  children,
  validationSchema,
  onSucces = () => {},
  onError = () => {},
  ...formProps
}) => {
  const handleSubmit = async (values) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_ROOT}${url}`, {
        method,
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      onSucces();
    } catch (error) {
      onError(error);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize={true}
    >
      {(formik) => <Form {...formProps}>{children(formik)}</Form>}
    </Formik>
  );
};
