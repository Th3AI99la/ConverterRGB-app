import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RGBInput from '../components/RGBInput';

const RGBConverterScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const getBackgroundColor = () => `rgb(${red}, ${green}, ${blue})`;

  return (
    <View style={[styles.container, { backgroundColor: getBackgroundColor() }]}>
      <Text style={styles.title}>Converter RGB</Text>

      <RGBInput label="RED" value={red} setValue={setRed} />
      <RGBInput label="GREEN" value={green} setValue={setGreen} />
      <RGBInput label="BLUE" value={blue} setValue={setBlue} />

      <Text style={styles.result}>Cor de fundo: rgb({red}, {green}, {blue})</Text>
    </View>
  );
};




export default RGBConverterScreen;
