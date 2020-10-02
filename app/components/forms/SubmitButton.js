import React from "react";
import { useFormikContext } from "formik";

import { Button } from "../custom";

const SubmitButton = ({ children }) => {
  const { handleSubmit } = useFormikContext();
  return <AppButton onPress={handleSubmit}>{children}</AppButton>;
};

export default SubmitButton;
