import React from "react";
import { useFormikContext } from "formik";

import TextInput from "./TextInput";
import ErrorMessage from "./ErrorMessage";

const FormField = ({ name, width, ...props }) => {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext();
  return (
    <>
      <TextInput
        onChangeText={(text) => setFieldValue(name, text)}
        onBlur={() => setFieldTouched(name)}
        value={values[name]}
        width={width}
        {...props}
      />
      <ErrorMessage visible={touched[name]}>{errors[name]}</ErrorMessage>
    </>
  );
};

export default FormField;
