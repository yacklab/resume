import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
interface Validator {
  required: boolean;
  regEx?: RegExp;
}

const useForm = <T>(
  stateSchema: T,
  validationSchema: { [key in keyof T]?: Validator },
  callback: any
) => {
  const { t } = useTranslation();
  const [state, setState] = useState<T>(stateSchema);
  const [errors, setErrors] = useState<{ [key in keyof T]?: string }>({});
  const [disable, setDisable] = useState(true);
  const [isDirty, setIsDirty] = useState(false);

  const hasError = useCallback(() => {
    const e = (Object.keys(state) as (keyof T)[]).some(key => {
      return (
        (validationSchema[key] &&
          validationSchema[key]!.required &&
          !state[key]) ||
        errors[key]
      );
    });
    return e;
  }, [state, validationSchema, errors]);

  useEffect(() => {
    setDisable(true);
  }, []);

  useEffect(() => {
    if (isDirty) {
      setDisable(hasError());
    }
  }, [state, isDirty, hasError]);

  const handleOnChange = useCallback(
    (name: keyof T, value: string) => {
      setIsDirty(true);

      let error = "";
      if (validationSchema[name] && validationSchema[name]!.required) {
        if (!value) {
          error = t("ERRORS.FIELD_REQUIRED");
        }
      }
      if (validationSchema[name] && validationSchema[name]!.regEx) {
        if (!validationSchema[name]!.regEx!.test(value)) {
          error = t("ERRORS.FIELD_FORMAT");
        }
      }
      setErrors(prevState => ({
        ...prevState,
        [name]: error
      }));
      setState(prevState => ({
        ...prevState,
        [name]: value
      }));
    },
    [validationSchema, t]
  );

  const handleOnSubmit = useCallback(
    event => {
      console.log("handling submit");
      event.preventDefault();

      // Make sure that validateState returns false
      // Before calling the submit callback function
      if (!hasError()) {
        callback(state);
      }
    },
    [state, hasError, callback]
  );

  return { state, disable, errors, handleOnChange, handleOnSubmit };
};

// useForm<{b: boolean}>({b: false}, {}, () => {})

export default useForm;
