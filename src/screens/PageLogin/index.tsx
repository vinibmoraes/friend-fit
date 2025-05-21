import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Button, TextInput } from "react-native-paper";
import VStack from "../../components/VStack";
import ResponsiveText from "../../components/ResponsiveText";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants";

interface Props {
  onLoginSuccess: () => void;
}

const LoginScreen: React.FC<Props> = ({ onLoginSuccess }) => {
  return (
    <View style={styles.container}>
      <VStack>
        <Image
          source={require("../../../assets/logo-next-fit.png")}
          style={styles.logo}
        />

        <ResponsiveText
          text="Que bom te ter aqui!"
          variant="title"
          style={{ marginBottom: 10 }}
        />
        <ResponsiveText
          text="Preencha as informações de login:"
          variant="instruction"
          style={{ marginBottom: 30 }}
        />

        <TextInput label="CPF ou E-mail" mode="outlined" style={styles.input} />
        <TextInput
          label="Senha"
          mode="outlined"
          secureTextEntry
          style={styles.input}
        />

        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            icon={() => (
              <MaterialIcons name="arrow-forward" size={20} color="white" />
            )}
            onPress={onLoginSuccess}
            style={styles.button}
          >
            Avançar
          </Button>
        </View>
      </VStack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    alignSelf: "center",
    width: SCREEN_WIDTH * 0.4,
    height: SCREEN_HEIGHT * 0.1,
    resizeMode: "contain",
    marginBottom: 15,
  },

  input: {
    marginVertical: 6,
    backgroundColor: "white",
  },
  buttonContainer: {
    alignItems: "flex-end",
    marginTop: 24,
  },
  button: {
    backgroundColor: "#833ab4",
  },
});

export default LoginScreen;
