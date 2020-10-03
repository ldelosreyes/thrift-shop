import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../config";

const NewListingButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.touchable} onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          color={colors.white}
          name="plus-circle"
          size={40}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderRadius: 40,
    borderWidth: 10,
    bottom: 30,
    height: 80,
    justifyContent: "center",
    width: 80,
  },
});

export default NewListingButton;
