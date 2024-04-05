import { Link } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function EnterName() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>GIX GOK</Text>
        <TextInput style={styles.input} placeholder="Enter your name" />
        {/* <Link href="/(tab)/singleplayer/choose_difficulty" asChild> */}
        <Link href="/Game/game" asChild>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
        </Link>
      </View>
    );
}

const styles = {
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
    input: {
        backgroundColor: '#ddd',
        borderRadius: 5,
        marginTop: "20%",
        padding: 15,
        width: 200,
        alignItems: 'center',
        borderRadius:102,
        fontSize: 20,
        textAlign: 'center',

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
};

