import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  Form,
  FormField,
  FormImagePicker,
  FormPicker,
  SubmitButton,
  CategoryPickerItem,
  Screen,
} from "../components";
import { useLocation } from "../hooks";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  { backgroundColor: "red", icon: "apps", label: "Clothing", value: 1 },
  { backgroundColor: "green", icon: "email", label: "Shoes", value: 2 },
  { backgroundColor: "blue", icon: "lock", label: "Handbags", value: 3 },
];

const ListingEditScreen = () => {
  const location = useLocation();
  return (
    <Screen style={styles.screen}>
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          maxLength={8}
          name="price"
          placeholder="Price"
          keyboardType="numeric"
          width={120}
        />
        <FormPicker
          items={categories}
          name="category"
          numColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <FormField
          maxLength={255}
          name="description"
          placeholder="Description"
          multiline
          numberOfLines={3}
        />
        <SubmitButton>Post</SubmitButton>
      </Form>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
});

export default ListingEditScreen;
