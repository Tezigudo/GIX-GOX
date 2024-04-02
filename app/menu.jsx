import { Link } from "expo-router";
import { View } from "react-native";

export default function menu(){
    return(
        <View>
            <Link href="/choose-deficulty">1 player</Link>
            <Link href="/choose-mode">2 players</Link>
        </View>
    )
}