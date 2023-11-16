import { object, string, number } from "yup";

export const userSchema = object({
  username: string().min(8).required("این فیلد الزامی است.").max(50),
  name: string().min(3).max(256).nullable(),
  email: string().email().max(256).required(),
  age: number().min(10).max(18).required(),
});

export const convertErrors = (errors = []) => {
  const convertedError = {};
  errors.forEach((error) => {
    convertedError[error.path] = error.errors;
  });
  return convertedError;
};
