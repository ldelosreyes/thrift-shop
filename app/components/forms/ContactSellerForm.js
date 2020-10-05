import React from "react";
import { Alert, Keyboard, StyleSheet, View } from "react-native";
import { Notifications } from "expo";
import * as Yup from "yup";

import Form from "./Form";
import FormField from "./FormField";
import SubmitButton from "./SubmitButton";

import { messagesApi } from "../../api";
import { useApi } from "../../hooks";
import { ActivityIndicator } from "../custom";

const ContactSellerForm = ({ listing }) => {
  const sendMessageApi = useApi(messagesApi.send);

  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const response = await sendMessageApi.request(message, listing.id);

    if (!response.ok) {
      console.log("Error", response);
      return Alert.alert("Error", "Could not send the message to the seller.");
    }

    resetForm();

    Notifications.presentLocalNotificationAsync({
      title: "Awesome!",
      body: "Your message was sent to the seller.",
    });
  };

  return (
    <View style={styles.container}>
      <ActivityIndicator visible={sendMessageApi.loading} />
      <Form
        initialValues={{ message: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormField
          maxLength={255}
          multiline
          name="message"
          numberOfLines={3}
          placeholder="Message..."
        />
        <SubmitButton>Contact Seller</SubmitButton>
      </Form>
    </View>
  );
};

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label("Message"),
});

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
});

export default ContactSellerForm;
