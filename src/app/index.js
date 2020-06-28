/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView, Text } from 'react-native';

const App = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        Bienvenidos al Workshop de React Native
      </Text>
    </SafeAreaView>
  );
};

export default App;
