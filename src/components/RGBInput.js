// Componente de entrada RGB e logica de validação

import React from "react";
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";

// Componente funcional RGBInput que recebe props: label, value, setValue e labelStyle
const RGBInput = ({ label, value, setValue, labelStyle }) => {
  const handleChange = (text) => {
    // Permite que o campo de entrada fique vazio
    if (text === "") {
      setValue(0);
      return;
    }

    // Verifica se o texto contém apenas números
    if (/^\d+$/.test(text)) {
      const number = Number(text);
      // Verifica o intervalo entre 0 e 255
      if (number >= 0 && number <= 255) {
        setValue(number);
      } else {
        Alert.alert(
          "Valor inválido",
          "Por favor, insira um valor entre 0 e 255."
        );
      }
    } else {
      Alert.alert("Entrada inválida", "Por favor, insira apenas números.");
    }
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, labelStyle]}>{label}:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric" // Aciona teclado numérico
        value={String(value)} // Converte o valor para string para exibição
        onChangeText={handleChange} // Atualiza o valor ao mudar o texto
      />
    </View>
  );
};

// Estilos para o componente RGBInput
const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
    width: "80%",
  },
  label: {
    fontSize: 20,
  },
  input: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    paddingLeft: 10,
    fontSize: 16,
  },
});

export default RGBInput;
