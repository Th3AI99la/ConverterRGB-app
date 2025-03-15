// Tela principal do aplicativo que converte valores RGB em uma cor de fundo

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RGBInput from '../components/RGBInput';  // Import do componente RGBInput

const RGBConverterScreen = () => {
  // Definindo estados para armazenar os valores RGB = 0
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  // Função para obter a cor de fundo em formato RGB
  const getBackgroundColor = () => `rgb(${red}, ${green}, ${blue})`;

  return (
    // Define o contêiner principal com a cor de fundo baseada nos valores RGB
    <View style={styles.container}>
      <Text style={styles.title}>Converter RGB</Text>

      {/* Componentes RGBInput para entrada dos valores RGB */}
      <RGBInput label="RED" value={red} setValue={setRed} labelStyle={styles.labelRed} />
      <RGBInput label="GREEN" value={green} setValue={setGreen} labelStyle={styles.labelGreen} />
      <RGBInput label="BLUE" value={blue} setValue={setBlue} labelStyle={styles.labelBlue} />

      {/* Texto exibindo a cor RGB atual */}
      <Text style={styles.result}>Cor de fundo: RGB({red}, {green}, {blue})</Text>
  
      {/* TELA DO MINI CIRCULO */}
      <View style={styles.circleContainer}>
        <View style={[styles.circle, { backgroundColor: getBackgroundColor() }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    justifyContent: 'center', 
    alignItems: 'center',  
    padding: 20,  
    backgroundColor: '#8181814E',
  },
  title: {
    fontSize: 40, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    padding: 10,  
    borderRadius: 10,  
  },
  result: {
    fontSize: 20,  
    fontWeight: 'bold',  
    padding: 10,  
    borderRadius: 10,  
  },

  // ESTILO DO MINI CIRCULO
  circleContainer: {
    marginTop: 20,  // Adiciona uma margem superior ao contêiner do círculo
    alignItems: 'center',  // Centraliza o círculo horizontalmente
    backgroundColor: 'black',  // Define a cor de fundo do contêiner do círculo
    padding: 1,  // Adiciona um preenchimento ao redor do contêiner do círculo
    borderRadius: 100,  // Adiciona bordas arredondadas ao contêiner do círculo

  },
  circle: {
    width: 100,  // Define a largura do círculo
    height: 100,  // Define a altura do círculo
    borderRadius: 100,  // Faz com que o elemento seja redondo
    padding: 100,  // Adiciona um preenchimento ao redor do círculo

  },
  // ESTILO PARA AS LABELS DE ENTRADA
  labelRed: {
    color: 'red',  // Define a cor do texto como vermelho
  },
  labelGreen: {
    color: 'green',  // Define a cor do texto como verde
  },
  labelBlue: {
    color: 'blue',  // Define a cor do texto como azul
  },
});

export default RGBConverterScreen;
