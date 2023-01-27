import { useCallback, useState } from "react";

export function useFormAndValidation(inputValues) {
  const [values, setValues] = useState(inputValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value })
    setErrors({ ...errors, [name]: event.target.validationMessage })
    setIsValid(event.target.closest('form').checkValidity());
  };

  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, [setValues, setErrors, setIsValid])

  return {values, errors, isValid, setIsValid, setValues, handleChange, resetForm};
}
