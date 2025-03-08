import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const RGBInput = ({ label, value, setValue }) => {
  const handleChange = (text) => {
    const number = Number(text);
    if (!isNaN(number)) {
      setValue(number);
    }
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={String(value)}
        onChangeText={handleChange}
      />
    </View>
  );
};


export default RGBInput;
