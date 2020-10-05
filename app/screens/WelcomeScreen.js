import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";

import { Button } from "../components";

import colors from "../config/color";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      blurRadius={2}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </View>
      <View style={styles.buttonsContainer}>
        <Button onPress={() => navigation.navigate("Login")}>Login</Button>
        <Button
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </Button>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 100,
  },
  logo: {
    width: 300,
    height: 75,
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  registerBtn: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
});

export default WelcomeScreen;
