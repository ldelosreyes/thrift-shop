import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppNavigator, AuthNavigator, navigationTheme } from "./app/navigation";

const App = () => {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
