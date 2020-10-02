import React from "react";
import { StyleSheet } from "react-native";

import { Text } from "../custom";
import { colors } from "../../config";

const ErrorMessage = ({ children, visible }) => {
  if (!visible || !children) return null;
  return <Text style={styles.error}>{children}</Text>;
};

const styles = StyleSheet.create({
  error: {
    color: colors.secondary,
    fontSize: 14,
  },
});

export default ErrorMessage;
