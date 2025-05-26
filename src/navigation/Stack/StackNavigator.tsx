import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../../screens/PageLogin";
import DrawerNavigator from "../Drawer/DrawerNavigator";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isLoggedIn ? (
        <Stack.Screen name="Login">
          {() => <LoginScreen onLoginSuccess={() => setIsLoggedIn(true)} />}
        </Stack.Screen>
      ) : (
        <Stack.Screen name="App">
          {() => <DrawerNavigator onLogout={handleLogout} />}
        </Stack.Screen>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
