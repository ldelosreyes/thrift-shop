import React from "react";
import { FlatList, StyleSheet } from "react-native";
import colors from "../config/color";

import { Card, Screen } from "../components";
import { routes } from "../navigation";

const listings = [
  {
    id: 1,
    title: "Canada Red Jacket",
    price: 99,
    image: require("../assets/jacket2.jpg"),
  },
  {
    id: 2,
    title: "Jordan 1 High",
    price: 200,
    image: require("../assets/shoes.jpg"),
  },
];

const ListingsScreen = ({ navigation }) => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={`\$${item.price.toFixed()}`}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
