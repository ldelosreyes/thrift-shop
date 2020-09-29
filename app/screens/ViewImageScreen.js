import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/color";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.close}>
        <MaterialCommunityIcons name="close" size={35} color="white" />
      </View>
      <View style={styles.delete}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={35}
          color="white"
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/shoes.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  close: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  delete: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
