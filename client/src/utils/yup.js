import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Введите корректный email")
    .required("Обязательное поле"),
  password: yup
    .string()
    .required("Обязательное поле")
    .min(8,"Пароль должен содержать не менее 8 символов")
});

export const registerSchema = yup.object().shape({
  userName: yup.string().required("Обязательное поле"),
  email: yup
    .string()
    .email("Введите корректный email")
    .required("Обязательное поле"),
  password: yup
    .string()
    .required("Обязательное поле")
    .min(8,"Пароль должен содержать не менее 8 символов")
});

export const studentSchema = yup.object().shape({
  userName: yup
    .string()
    .required("Обязательное поле")
    .min(8,"UserName должен содержать не менее 8 символов"),
  email: yup
    .string()
    .email("Введите корректный email")
    .required("Обязательное поле"),
});