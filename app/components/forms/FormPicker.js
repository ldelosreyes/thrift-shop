import React from "react";
import { useFormikContext } from "formik";

import { Picker } from "../custom";
import ErrorMessage from "./ErrorMessage";

const FormPicker = ({
  items,
  name,
  numColumns,
  PickerItemComponent,
  placeholder,
  width,
}) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <Picker
        items={items}
        numColumns={numColumns}
        onSelect={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selected={values[name]}
        width={width}
      />
      <ErrorMessage visible={touched[name]}>{errors[name]}</ErrorMessage>
    </>
  );
};

export default FormPicker;
