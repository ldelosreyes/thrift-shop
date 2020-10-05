import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { OfflineNotice } from "./app/components";
import { AppNavigator, AuthNavigator, navigationTheme } from "./app/navigation";

const App = () => {
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;
