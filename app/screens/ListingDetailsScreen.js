import React from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/color";
import { Text, ListItem } from "../components";
import ContactSellerForm from "../components/forms/ContactSellerForm";

const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={0}>
        <Image
          style={styles.image}
          preview={{ uri: listing.images[0].thumbnailUrl }}
          tint="light"
          uri={listing.images[0].url}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{listing.title}</Text>
          <Text style={styles.price}>${listing.price}</Text>
          <View style={styles.userContainer}>
            <ListItem
              title="John Smith"
              subtitle="2 Listings"
              image={require("../assets/headshot.png")}
            />
          </View>
          <ContactSellerForm listing={listing} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.primary,
    fontWeight: "bold",
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
