import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { Card } from "react-native-paper";

const CreatinaScreen = () => {
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    setConfirmed(true);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Card>
        <Card.Title title="Lembrete de Creatina" />
        <Card.Content>
          <Text>Horário definido: 8:00 AM</Text>
          <Button
            title={confirmed ? "Você tomou creatina!" : "Confirmar que tomou"}
            onPress={handleConfirm}
          />
        </Card.Content>
      </Card>
    </View>
  );
};

export default CreatinaScreen;
