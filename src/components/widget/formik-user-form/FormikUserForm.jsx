import React, { useEffect, useState } from "react";
import { Button } from "../../base";
import "./user-form.style.css";
import { validateUserForm } from "./manual-validation";
import clsx from "clsx";
import { convertErrors, userSchema } from "./yup-validation";

import { useFormik } from "formik";
const formFields = [
  {
    name: "username",
    label: "Username",
    type: "text",
  },
  {
    name: "name",
    label: "Name",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    name: "age",
    label: "Age",
    type: "number",
  },
];
const emptyUser = {
  username: "",
  name: "",
  email: "",
  age: 0,
};
export function FormikUserForm({
  initialValue = emptyUser,
  onSubmit,
  ...props
}) {
  const {
    errors,
    handleBlur,
    setValues,
    handleChange,
    values,
    isSubmitting,
    setSubmitting,
    setErrors,
    handleSubmit,
  } = useFormik({
    initialValues: initialValue ?? emptyUser,
    onSubmit: (data) => {
      setSubmitting(true);
      setTimeout(() => {
        onSubmit(data)
          .then((res) => console.log(res))
          .catch((error) => {
            console.log(error);
            // you can use setError to show backend errors
          })
          .finally(() => {
            setSubmitting(false);
          });
      }, 2000);
    },
    validateOnBlur: true,
    validateOnChange: false,
    validate: (values) => {
      const { fromErrors } = validateUserForm(values);
      return fromErrors;
    },
    validationSchema: userSchema,
  });

  useEffect(() => {
    if (initialValue) {
      setValues(initialValue);
    } else {
      setValues(emptyUser);
    }
  }, [initialValue, setValues]);
  return (
    <form onSubmit={handleSubmit} {...props}>
      {formFields.map((field) => (
        <FormControl
          key={field.name}
          error={errors[field.name]}
          value={values[field.name]}
          handleChange={handleChange}
          handleBlur={handleBlur}
          name={field.name}
          label={field.label}
          type={field.type}
        />
      ))}
      <div className="form-control">
        <Button
          className={clsx(isSubmitting && "loading")}
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? "...Saving" : "Save"}
        </Button>
      </div>
    </form>
  );
}

const FormControl = ({
  label,
  name,
  handleChange,
  value,
  error,
  handleBlur,
  type = "text",
}) => {
  return (
    <div className="form-control">
      <label>
        <span>{label}</span>
        <input
          type={type}
          onBlur={handleBlur}
          name={name}
          value={value}
          onChange={handleChange}
        />
      </label>
      {error ? <span className="">{error}</span> : null}
    </div>
  );
};
