import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainMenu from "./screens/MainMenu";
import Game from "./Game/Game";
import PlayerNames from "./screens/PlayerNames";
import ChooseDifficulty from "./screens/ChooseDifficulty";
import GameMode from "./screens/GameMode";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createStackNavigator();


export default function App(){
  return(
    <SafeAreaProvider>
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainMenu} />
        <Stack.Screen name="GameMode" component={GameMode} />
        <Stack.Screen name="Difficulty" component={ChooseDifficulty} />
        <Stack.Screen name="PlayerNames" component={PlayerNames} />
        <Stack.Screen name="Game" component={Game} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  )
};