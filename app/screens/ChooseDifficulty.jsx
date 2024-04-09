import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Mode } from "../enum/Mode";
import { Difficulty } from "../enum/Difficulty";

export default function ChooseDifficulty({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GIX GOK</Text>
      <Text>Choose Difficulty</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={()=>navigation.navigate("Game", { mode: Mode.SINGLEPLAYER, difficulty: Difficulty.EASY })}>
        <Text style={styles.buttonText}>Easy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={()=> navigation.navigate("Game", { mode: Mode.SINGLEPLAYER, difficulty: Difficulty.HARD })}>
        <Text style={styles.buttonText}>Hard</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 30,
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    marginBottom: 100,
    marginTop: "10%",
  },
  button: {
    backgroundColor: "#ddd",
    padding: 10,
    borderRadius: 5,
    marginTop: "20%",
    padding: 10,
    width: 200,
    alignItems: "center",
    borderRadius: 102,
  },
  buttonText: {
    fontSize: 30,
  },
});
