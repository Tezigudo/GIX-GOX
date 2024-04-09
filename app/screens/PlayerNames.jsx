import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function PlayerNames({navigation, route}) {
    const [player1Name, setPlayer1Name] = useState("");
    const [player2Name, setPlayer2Name] = useState("");


    const handleStartGame = () => {
        navigation.navigate("Game", {
          mode: route.params.mode,
          player1Name,
          player2Name,
        });
      };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>GIX GOK</Text>
        <TextInput style={styles.input} value={player1Name} placeholder="Player 1" onChangeText={setPlayer1Name}/>
        <TextInput style={styles.input} value={player2Name} placeholder="Player 2" onChangeText={setPlayer2Name}/>
        <TouchableOpacity style={styles.button} onPress={handleStartGame}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
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

