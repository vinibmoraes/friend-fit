import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Telas
import CreatinaScreen from "../src/screens/CreatinaReminder";
import WaterScreen from "../src/screens/WaterReminder";

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Creatina">
      <Drawer.Screen name="Creatina" component={CreatinaScreen} />
      <Drawer.Screen name="Água" component={WaterScreen} />
      {/* Adicione outras telas aqui */}
    </Drawer.Navigator>
  );
};

export default AppNavigator;
