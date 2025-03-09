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
      // Verifica se o número está entre 0 e 255
      if (number >= 0 && number <= 255) {
        setValue(number);
      } else {
        Alert.alert("Valor inválido", "Por favor, insira um valor entre 0 e 255.");
      }
    } else {
      Alert.alert("Entrada inválida", "Por favor, insira apenas números.");
    }
  };

  return (
    <View style={styles.inputContainer}>
      {/* Exibe o rótulo do campo de entrada com o estilo personalizado */}
      <Text style={[styles.label, labelStyle]}>{label}:</Text>
      {/* Campo de entrada de texto para valores RGB */}
      <TextInput
        style={styles.input}
        keyboardType="numeric" // Define o teclado numérico para entrada
        value={String(value)} // Converte o valor para string para exibição
        onChangeText={handleChange} // Atualiza o valor ao mudar o texto
      />
    </View>
  );
};

// Estilos para o componente RGBInput
const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20, // Margem inferior de 20 unidades
    width: "80%", // Largura de 80% do contêiner pai
  },
  label: {
    fontSize: 20, // Tamanho da fonte do rótulo
  },
  input: {
    height: 40, // Altura do campo de entrada
    borderColor: "black", // Cor da borda do campo de entrada
    borderWidth: 1, // Largura da borda do campo de entrada
    paddingLeft: 10, // Preenchimento à esquerda de 10 unidades
    fontSize: 16, // Tamanho da fonte do campo de entrada
  },
});

export default RGBInput;
