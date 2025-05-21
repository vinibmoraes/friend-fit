import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

// Telas
import HomeScreen from "./screens/home";
import CreatinaScreen from "./screens/CreatinaReminder";
import WaterScreen from "./screens/WaterReminder";
import LoginScreen from "./screens/PageLogin";
import LogoutButton from "./components/LogoutButton";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Drawer customizado com botão de sair
  const CustomDrawerContent = (props: any) => (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <LogoutButton onLogout={handleLogout} />
    </DrawerContentScrollView>
  );

  // Navegação do App com menu lateral
  const DrawerNavigator = () => (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName="Início"
    >
      <Drawer.Screen name="Início" component={HomeScreen} />
      <Drawer.Screen name="Creatina" component={CreatinaScreen} />
      <Drawer.Screen name="Água" component={WaterScreen} />
    </Drawer.Navigator>
  );

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isLoggedIn ? (
        <Stack.Screen name="Login">
          {() => <LoginScreen onLoginSuccess={() => setIsLoggedIn(true)} />}
        </Stack.Screen>
      ) : (
        <Stack.Screen name="App" component={DrawerNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
