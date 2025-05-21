import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Button, TextInput } from "react-native-paper";
import VStack from "../../components/VStack";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

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

        <Text style={styles.welcome}>Que bom te ter aqui!</Text>
        <Text style={styles.instructions}>
          Preencha as informações de login:
        </Text>

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
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 15,
  },
  welcome: {
    color: "#833ab4",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 8,
  },
  instructions: {
    color: "#833ab4",
    textAlign: "center",
    marginBottom: 16,
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
