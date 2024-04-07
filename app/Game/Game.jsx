import { useEffect, useState } from "react";
import { Text, View } from "react-native";


export default function Game(){
    const initailBoard = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]

    const [board, SetBoard] = useState(initailBoard);
    const [player, SetPlayer] = useState("X");
    const [winner, SetWinner] = useState("");


    useEffect(() => checkWinner(), [board])

    const onPress = (rowIndex, cellIndex) => {
        if(board[rowIndex][cellIndex] == "" && !winner){
            const newBoard = [...board];
            newBoard[rowIndex][cellIndex] = player;
            SetBoard(newBoard);
            SetPlayer(player === "X" ? "O" : "X");
        }
    }

    const checkWinner = () =>{
        for(let i=0; i<3; i++){
            if(board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] != ""){
                SetWinner(board[i][0]);
                break;
            }
        }
    }

    for (let i = 0; i < 3; i++) {
        if (board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[0][i] != "") {
            SetWinner(board[0][i]);
            break;
        }
    }

    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != "") {
        SetWinner(board[0][0]);
    }else if(board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != ""){
        SetWinner(board[0][2]);

    }

    const resetBoaard = () => {
        SetBoard(initailBoard);
        SetPlayer("X");
        SetWinner("");

    }





    return (
        <View>
            <Text>GAME</Text>
        </View>
    )
}

