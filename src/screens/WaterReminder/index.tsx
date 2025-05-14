import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const WaterScreen = () => {
  const [waterDrunk, setWaterDrunk] = useState(0);
  const goal = 3; // 3 litros

  const handleDrink = () => {
    setWaterDrunk(waterDrunk + 0.5); // A cada copo de 500ml
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Meta de água: {goal}L/dia</Text>
      <Text>Você bebeu: {waterDrunk}L</Text>
      <Button title="Bebi 500ml" onPress={handleDrink} />
    </View>
  );
};

export default WaterScreen;
