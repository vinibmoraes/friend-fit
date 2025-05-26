import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../../screens/home";
import CreatinaScreen from "../../screens/CreatinaReminder";
import WaterScreen from "../../screens/WaterReminder";
import CustomDrawerContent from "./CustomDrawerContent";

const Drawer = createDrawerNavigator();

interface DrawerNavigatorProps {
  onLogout: () => void;
}

const DrawerNavigator = ({ onLogout }: DrawerNavigatorProps) => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent {...props} onLogout={onLogout} />
      )}
      initialRouteName="Início"
    >
      <Drawer.Screen name="Início" component={HomeScreen} />
      <Drawer.Screen name="Creatina" component={CreatinaScreen} />
      <Drawer.Screen name="Água" component={WaterScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
