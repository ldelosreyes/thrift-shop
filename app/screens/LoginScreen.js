import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import { authApi } from "../api";
import {
  ActivityIndicator,
  ErrorMessage,
  Form,
  FormField,
  Screen,
  SubmitButton,
} from "../components";
import { useAuth, useApi } from "../hooks";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const LoginScreen = () => {
  const { logIn } = useAuth();
  const loginApi = useApi(authApi.login);
  const [error, setError] = useState();

  const handleSubmit = async ({ email, password }) => {
    setError();
    const response = await loginApi.request(email, password);

    if (!response.ok) {
      if (response.data) setError(response.data.error);
      else {
        setError("An unexpected error occurred.");
        console.log(response);
      }
      return;
    }

    logIn(response.data);
  };

  return (
    <>
      <ActivityIndicator visible={loginApi.loading} />
      <Screen style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Form
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage visible={error}>{error}</ErrorMessage>
          <FormField
            name="email"
            autoCapitalize="none"
            icon="email"
            placeholder="Email"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <FormField
            name="password"
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            placeholder="Password"
            textContentType="password"
            secureTextEntry
          />
          <SubmitButton>Login</SubmitButton>
        </Form>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 75,
    alignSelf: "center",
    marginVertical: 20,
  },
  container: {
    padding: 10,
  },
});

export default LoginScreen;
