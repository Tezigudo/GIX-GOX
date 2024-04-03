import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GIX GOK</Text>
      <Link href="/menu" asChild>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Play</Text>
      </TouchableOpacity>
      </Link>
      {/* <Link href="/_sitemap" asChild>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Debug</Text>
      </TouchableOpacity>
      </Link> */}
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