import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { Form, FormField, Screen, SubmitButton } from "../components";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const RegisterScreen = () => {
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
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
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
