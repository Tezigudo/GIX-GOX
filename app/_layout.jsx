import { Stack } from "expo-router"

const RootLayout = ()=>{
    return(
        <Stack>
            <Stack.Screen name="index" options={
                {title: "menu"}
            } />
            <Stack.Screen name="game" options={
                {title: "Play Game"}
            } />
        </Stack>
    )
}

export default RootLayout;