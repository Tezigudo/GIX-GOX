import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Mode } from '../enum/Mode';

export default function GameMode({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GIX GOK</Text>
      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Difficulty")}>
        <Text style={styles.buttonText}>1 player</Text>
      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("PlayerNames", {mode:Mode.TWOPLAYER})}>
      </TouchableOpacity>
        <Text style={styles.buttonText}>2 player</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 30,
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 100,
    marginTop: "10%",
  },
  button: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginTop: "20%",
    padding: 10,
    width: 200,
    alignItems: 'center',
    borderRadius:102
  },
  buttonText: {
    fontSize: 30,
  },
});