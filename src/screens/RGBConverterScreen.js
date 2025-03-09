// Tela principal do aplicativo que converte valores RGB em uma cor de fundo

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RGBInput from '../components/RGBInput';  // Importando o componente RGBInput

const RGBConverterScreen = () => {
  // Definindo estados para armazenar os valores RGB
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

      {/* Exibir a cor de fundo em um círculo */}
      <View style={styles.circleContainer}>
        <View style={[styles.circle, { backgroundColor: getBackgroundColor() }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,  // Faz com que o contêiner ocupe toda a tela
    justifyContent: 'center',  // Centraliza o conteúdo verticalmente
    alignItems: 'center',  // Centraliza o conteúdo horizontalmente
    padding: 20,  // Adiciona um preenchimento ao redor do contêiner
    backgroundColor: '#8181814E',  // Define a cor de fundo do contêiner
  },
  title: {
    fontSize: 40,  // Define o tamanho da fonte do título
    fontWeight: 'bold',  // Define o peso da fonte como negrito
    marginBottom: 20,  // Adiciona uma margem inferior ao título
    padding: 10,  // Adiciona um preenchimento ao redor do título
    borderRadius: 10,  // Adiciona bordas arredondadas ao título
  },
  result: {
    fontSize: 20,  // Define o tamanho da fonte do texto de resultado
    fontWeight: 'bold',  // Define o peso da fonte como negrito
    padding: 10,  // Adiciona um preenchimento ao redor do título
    borderRadius: 10,  // Adiciona bordas arredondadas ao título
  },

  // Estilos para o contêiner do círculo e o círculo
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
