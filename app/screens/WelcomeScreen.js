import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";

import { AppButton } from "../components";

import colors from "../config/color";

const WelcomeScreen = () => {
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
        <AppButton onPress={() => console.log("login")}>Login</AppButton>
        <AppButton color="secondary" onPress={() => console.log("register")}>
          Register
        </AppButton>
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
    top: 70,
  },
  logo: {
    width: 150,
    height: 150,
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
