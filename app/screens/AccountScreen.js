import React from "react";
import { StyleSheet, View, FlatList, ScrollView } from "react-native";
import { Icon, ListItem, ListItemSeparator } from "../components";
import { colors, routes } from "../config";
import { useAuth } from "../hooks";

const menu = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
];

const AccountScreen = ({ navigation }) => {
  const { user, logOut } = useAuth();

  return (
    <View style={styles.screen}>
				<FlatList
					ListHeaderComponent={
						<View style={styles.header}>
							<ListItem
								title={user.name}
								subtitle={user.email}
								image={require("../assets/headshot.png")}
							/>
						</View>
					}
          scrollEnabled={false}
          data={menu}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
					ItemSeparatorComponent={ListItemSeparator}
				ListFooterComponent={
						<View style={styles.footer}>
							<ListItem
								title="Logout"
								IconComponent={<Icon name="logout" backgroundColor={colors.yellow} />}
								onPress={() => logOut()}
								/>
						</View>
					}
        />
		</View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  header: {
    marginVertical: 20,
	},
	footer: {
		marginVertical: 20,
	}
});

export default AccountScreen;
