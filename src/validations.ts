import { body } from "express-validator";

export const registerValidation = [
  body("name", "Имя пользователя содержит меньше 3 символов").isLength({
    min: 3,
  }),
  body("email", "Почта невалидна").isEmail(),
  body("password", "Пароль содежит меьше 5 символов").isLength({ min: 5 }),
  body("birthDate", "Дата рождения невалидна").isDate(),
];

export const loginValidation = [
  body("email", "Почта невалидна").isEmail(),
  body("password", "Пароль содежит меьше 5 символов").isLength({ min: 5 }),
];
