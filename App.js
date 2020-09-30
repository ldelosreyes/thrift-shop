import React, { useState } from "react";
import { AppPicker, Screen } from "./app/components";
import {
  WelcomeScreen,
  ListingDetailsScreen,
  MessagesScreen,
  AccountScreen,
  ListingsScreen,
  LoginScreen,
  ListingEditScreen,
} from "./app/screens";

const categories = [
  { label: "Clothing", value: 1 },
  { label: "Shoes", value: 2 },
  { label: "Handbags", value: 3 },
];
const App = () => {
  return <LoginScreen />;
};

export default App;
