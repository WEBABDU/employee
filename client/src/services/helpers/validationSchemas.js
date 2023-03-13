import * as Yup from "yup";

export const emoployeeSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(3, "Слишком короткая имя")
    .max(50, "Слишком длинная имя")
    .required("Это поле объязательное"),
  last_name: Yup.string()
    .min(3, "Слишком короткая фамилия")
    .max(50, "Слишком длинная фамилия")
    .required("Это поле объязательное"),
  middle_name: Yup.string()
    .min(3, "Слишком короткое отчество")
    .max(50, "Слишком длинное отчество")
    .required("Это поле объязательное"),
  gender: Yup.number().required("Это поле объязательное"),
  marital_status: Yup.number().required("Это поле объязательное"),
  position: Yup.string()
    .min(3, "Слишком короткое")
    .max(50, "Слишком длинное")
    .required("Это поле объязательное"),
  experience: Yup.number().required("Это поле объязательное"),
  salary: Yup.number().required("Это поле объязательное"),
  phone_number: Yup.string()
    .required("Это поле объязательное")
    .matches(
      /^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/,
      "Неправильный формат"
    ),
  mail: Yup.string()
    .email("Невалидная почта")
    .required("Это поле объязательное"),
  working_status: Yup.number().required("Это поле объязательное"),
  adress: Yup.string().required("Это поле объязательное"),
  nationality: Yup.string().required("Это поле объязательное"),
  religion: Yup.string().required("Это поле объязательное"),
  mother_tongue: Yup.string().required("Это поле объязательное"),
});
