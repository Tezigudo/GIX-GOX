import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import { Board } from "./Board";
import { Mode } from "../enum/Mode";

export default function Game({route}){
    const { mode, difficulty, player1Name, player2Name } = route.params;

    const initailBoard = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]

    const [board, SetBoard] = useState(initailBoard);
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [winner, SetWinner] = useState("");

    useEffect(() => {
        checkWinner();
        checkTie();
    }, [board]);

    const handlePress = (rowIndex, cellIndex) => {
        if(board[rowIndex][cellIndex] === "" && !winner){
            const newBoard = [...board];
            newBoard[rowIndex][cellIndex] = currentPlayer;
            SetBoard(newBoard);
            setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
        }
    }

    const checkWinner = () =>{
        for(let i=0; i<3; i++){
            if(board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== ""){
                SetWinner(board[i][0]);
                return;
            }
        }

        for (let i = 0; i < 3; i++) {
            if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== "") {
                SetWinner(board[0][i]);
                return;
            }
        }

        if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== "") {
            SetWinner(board[0][0]);
            return;
        } else if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== ""){
            SetWinner(board[0][2]);
            return;
        }
    }

    const checkTie = () => {
        const isBoardFull = board.every(row => row.every(cell => cell !== ""));
        if (isBoardFull && !winner) {
            Alert.alert("It's a tie", " ", [{
                text: "Play Again",
                onPress: resetBoard
            }]);
        }
    }

    const resetBoard = () => {
        SetBoard(initailBoard);
        setCurrentPlayer("X");
        SetWinner("");
    }

    useEffect(() => {
        if(winner){
            Alert.alert(`Player ${winner} wons!`, ' ', [{
                text: "Play Again",
                onPress: resetBoard
            }]);
        }
    }, [winner])

    return (
        <View style={styles.container}>
            {mode === Mode.SINGLEPLAYER && <Text>{player1Name} vs {difficulty} Bot </Text>}
            {mode === Mode.TWOPLAYER && <Text>{player1Name} vs {player2Name}</Text>}
            <Text>Player {currentPlayer}'s turn</Text>
            <Board onPress={handlePress} board={board} />
        </View>
    )
}


const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    row: {
        flexDirection: "row"
    },
    cell: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1
    }
}