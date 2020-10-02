import React from "react";
import { useFormikContext } from "formik";

import { AppButton } from "../custom";

const AppSubmitButton = ({ children }) => {
  const { handleSubmit } = useFormikContext();
  return <AppButton onPress={handleSubmit}>{children}</AppButton>;
};

export default AppSubmitButton;
