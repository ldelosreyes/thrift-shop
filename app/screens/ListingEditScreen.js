import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import * as Yup from "yup";

import { listingsApi, categoriesApi } from "../api";
import {
	ActivityIndicator,
  Form,
  FormField,
  FormImagePicker,
  FormPicker,
  SubmitButton,
  CategoryPickerItem,
  Screen,
} from "../components";
import { useApi, useLocation } from "../hooks";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const ListingEditScreen = () => {
	const location = useLocation();
	const getCategoriesApi = useApi(categoriesApi.getCategories);

	const [categories, setCategories] = useState();
  const [uploadVisible, setUploadVisible] = useState(false);
	const [progress, setProgress] = useState(0);

	const getCategories = async () => {
		const { data, ok } = await getCategoriesApi.request();

		if (!ok) {
      console.log("Error", data);
      return Alert.alert("Error", "Could not retrieve the list of categories.");
		}

		setCategories(data.map(category => {
			return {
				...category,
				value: category.id,
				label: category.name
			}
		}));
	};

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const response = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
		);

    if (!response.ok) {
      setUploadVisible(false);
      return alert("Could not save the listing");
    }

    resetForm();
	};

	useEffect(() => {
		getCategories();
	}, [])

	return (
		<>
			<ActivityIndicator visible={getCategoriesApi.loading} />
			<Screen style={styles.screen}>
				<ScrollView>
					<UploadScreen
						onDone={() => setUploadVisible(false)}
						progress={progress}
						visible={uploadVisible}
					/>
					<Form
						initialValues={{
							title: "",
							price: "",
							description: "",
							category: null,
							images: [],
						}}
						onSubmit={handleSubmit}
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
				</ScrollView>
			</Screen>
		</>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 20,
    paddingTop: 10,
		paddingBottom: 20,
		position: "relative"
  },
});

export default ListingEditScreen;
