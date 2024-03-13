import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Layout from  './src/components/Layout';

export default function App() {
  return (
    <View style={styles.container}>

      <Layout />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
    justifyContent: 'center',
      padding: 10,
      height: 1000
  },
});
