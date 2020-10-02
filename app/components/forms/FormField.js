import React from "react";
import { useFormikContext } from "formik";

import TextInput from "./TextInput";
import ErrorMessage from "./ErrorMessage";

const FormField = ({ name, width, ...props }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <TextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        width={width}
        {...props}
      />
      <ErrorMessage visible={touched[name]}>{errors[name]}</ErrorMessage>
    </>
  );
};

export default FormField;
