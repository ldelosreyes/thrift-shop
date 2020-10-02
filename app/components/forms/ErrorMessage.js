import React from "react";
import { StyleSheet } from "react-native";

import { AppText } from "../custom";
import { colors } from "../../config";

const ErrorMessage = ({ children, visible }) => {
  if (!visible || !children) return null;
  return <AppText style={styles.error}>{children}</AppText>;
};

const styles = StyleSheet.create({
  error: {
    color: colors.secondary,
    fontSize: 14,
  },
});

export default ErrorMessage;
