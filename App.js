import React from "react";
import { SafeAreaView } from "react-native";
import RGBConverterScreen from "./src/components/screens";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RGBConverterScreen />
    </SafeAreaView>
  );
};

export default App;
