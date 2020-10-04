import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AccountScreen, MessagesScreen } from "../screens";
import { routes } from "../config";

const Stack = createStackNavigator();
const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={routes.ACCOUNT} component={AccountScreen} />
    <Stack.Screen name={routes.MESSAGES} component={MessagesScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
