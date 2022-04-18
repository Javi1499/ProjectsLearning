import React, { useState, useEffect } from "react";

const useValidation = (initialState, validation, onSubmit) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitForm, setSubmitForm] = useState(false);

  useEffect(() => {
    if (submitForm) {
      const noErrores = Object.keys(errors).length === 0;
      if (noErrores) {
        onSubmit(); //Funcion para mandar la info
      }
      setSubmitForm(false);
    }
  }, [errors]);
  //Function to exec when user typing
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  //Function that exec when user do submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const errorsValidation = validation(values);
    setErrors(errorsValidation);
    setSubmitForm(true);
  };
  //When event blur
  const handlerBlur = () => {
    const errorsValidation = validation(values);
    setErrors(errorsValidation);
  };
  return {
    values,
    errors,
    handleSubmit,
    handleChange,
    handlerBlur,
  };
};

export default useValidation;
