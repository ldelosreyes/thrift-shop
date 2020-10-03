import React from "react";
import { useFormikContext } from "formik";

import { Button } from "../custom";

const SubmitButton = ({ children, ...prop }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <Button {...prop} onPress={handleSubmit}>
      {children}
    </Button>
  );
};

export default SubmitButton;
