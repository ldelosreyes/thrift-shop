import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import { listingsApi } from "../api";
import { ActivityIndicator, Button, Card, Screen, Text } from "../components";
import { colors, routes } from "../config";
import { useApi } from "../hooks";

const ListingsScreen = ({ navigation }) => {
  const { data: listings, error, loading, request: getListings } = useApi(
    listingsApi.getListings
  );

  useEffect(() => {
    getListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <Text>Couldn't retrive the listings. Please try again.</Text>
          <Button onPress={getListings}>Retry</Button>
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={`\$${item.price.toFixed()}`}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            thumbnailUrl={item.images[0].thumbnailUrl}
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
