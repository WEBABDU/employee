import { FastField } from "formik";
import React from "react";
import { constants } from "../../services/constants";
import { Button } from "../Button/Button";
import { DatePicker } from "../Fields/DatePicker/DatePicker";
import { Input } from "../Fields/Input/Input";
import { Select } from "../Fields/Select/Select";
import { FileUpload } from "../Fields/Upload/FileUpload";
import { BaseForm } from "./BaseForm";

export const EmployeeForm = ({
  initialValues,
  validationSchema,
  title,
  onSuccess,
  onCancel,
  onError,
  method = "POST",
  url,
}) => {
  return (
    <>
      <div className="flex_center">
        <h1>{title}</h1>
      </div>
      <BaseForm
        url={url}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSucces={onSuccess}
        onError={onError}
        className="container"
        method={method}
      >
        {({ values, isSubmitting }) => (
          <>
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <FastField
                  name="first_name"
                  component={Input}
                  label="Имя"
                  placeholder="Введите имя"
                />
              </div>
              <div className="col-lg-4 col-md-4">
                <FastField
                  name="last_name"
                  component={Input}
                  label="Фамилия"
                  placeholder="Введите фамилию"
                />
              </div>
              <div className="col-lg-4 col-md-4">
                <FastField
                  name="middle_name"
                  component={Input}
                  label="Отчество"
                  placeholder="Введите отчество"
                />
              </div>
              <div className="col-lg-4 col-md-4">
                <FastField
                  name="gender"
                  component={Select}
                  options={constants.genderOptions}
                  label="Пол"
                  placeholder="Выберите пол"
                />
              </div>
              <div className="col-lg-4 col-md-4">
                <FastField
                  name="hired_date"
                  component={DatePicker}
                  label="Дата принятия на работу"
                />
              </div>
              <div className="col-lg-4 col-md-4">
                <FastField
                  name="birth_date"
                  component={DatePicker}
                  label="Дата рождения"
                />
              </div>
              <div className="col-lg-4 col-md-4">
                <FastField
                  name="marital_status"
                  component={Select}
                  options={constants.marital_status}
                  label="Семейный статус"
                  placeholder="Выберите..."
                />
              </div>
              <div className="col-lg-4 col-md-4">
                <FastField
                  name="working_status"
                  component={Select}
                  options={constants.working_status}
                  label="Статус"
                  placeholder="Выберите..."
                />
              </div>
              <div className="col-lg-4 col-md-4">
                <FastField
                  name="position"
                  component={Input}
                  label="Должность"
                  placeholder="Введите должность"
                />
              </div>
              <div className="col-lg-4 col-md-4">
                <FastField
                  name="experience"
                  component={Input}
                  type="number"
                  label="Стаж"
                  placeholder="Введите стаж"
                />
              </div>
              <div className="col-lg-4 col-md-4">
                <FastField
                  name="salary"
                  component={Input}
                  type="number"
                  label="Оклад(сум)"
                  placeholder="Введите оклад"
                />
              </div>
              <div className="col-lg-4 col-md-4">
                <FastField
                  name="phone_number"
                  component={Input}
                  type="string"
                  label="Номер телефона"
                  placeholder="Введите номер телефона 9989..."
                />
              </div>
              <div className="col-lg-4 col-md-4">
                <FastField
                  name="mail"
                  component={Input}
                  label="Почта"
                  placeholder="Введите почту"
                />
              </div>
              <div className="col-lg-4 col-md-4">
                <FastField
                  name="adress"
                  component={Input}
                  label="Адрес"
                  placeholder="Введите адрес"
                />
              </div>
              <div className="col-lg-4 col-md-4">
                <FastField
                  name="nationality"
                  component={Input}
                  label="Национальность"
                  placeholder="Введите национальность"
                />
              </div>
              <div className="col-lg-4 col-md-4">
                <FastField
                  name="religion"
                  component={Input}
                  label="Религия"
                  placeholder="Введите религию"
                />
              </div>
              <div className="col-xl-4 col-xxl-4 col-sm-4  col-xs-4 col-lg-4 col-md-4">
                <FastField
                  name="mother_tongue"
                  component={Input}
                  label="Родной язык"
                  placeholder="Введите язык"
                />
              </div>
              <div className="col-xl-4 col-xxl-4 col-sm-4  col-xs-4 col-lg-4 col-md-4">
                <FastField
                  name="avatar"
                  component={FileUpload}
                  type="file"
                  label="Картинка"
                  placeholder="Выберите картинку"
                />
              </div>
              <div className="col-xl-4 col-xxl-4 col-sm-4  col-xs-4 col-lg-4 col-md-4"></div>
              <div className="col-xl-4 col-xxl-4 col-sm-4  col-xs-4 col-lg-4 col-md-4"></div>
              <div className="col-lg-12 col-md-12">
                <FastField
                  name="comment"
                  component={Input}
                  label="Комментария"
                  isComment
                  placeholder="Комментарии"
                />
              </div>
            </div>
            <div className="row flex_center mt mb">
              <Button
                innerText="Отменить"
                type="reset"
                variant="login"
                onClick={onCancel}
              />
              <Button
                innerText="Отправить"
                type="submit"
                isSubmitting={isSubmitting}
              />
            </div>
          </>
        )}
      </BaseForm>
    </>
  );
};
