import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import { authApi, usersApi } from "../api";

import {
  ActivityIndicator,
  ErrorMessage,
  Form,
  FormField,
  Screen,
  SubmitButton,
} from "../components";
import { useApi, useAuth } from "../hooks";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const RegisterScreen = () => {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred.");
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.logIn(authToken);
  };

  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        <Form
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage visible={error}>{error}</ErrorMessage>
          <FormField
            name="name"
            icon="account"
            placeholder="Name"
            autoCorrect={false}
          />
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
          <SubmitButton color="secondary">Register</SubmitButton>
        </Form>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
