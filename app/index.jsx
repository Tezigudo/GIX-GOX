import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GIX GOK</Text>
      <Link href="/menu" asChild>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>play</Text>
      </TouchableOpacity>
      </Link>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 30
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 100,
  },
  button: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
  },
});