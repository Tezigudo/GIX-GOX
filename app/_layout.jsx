import { Stack } from "expo-router"

const RootLayout = ()=>{
    return(
        <Stack>
            <Stack.Screen name="index" options={
                {title: "menu"}
            } />
            <Stack.Screen name="[missing]" options={
                {title: "404"}
            } />
        </Stack>
    )
}

export default RootLayout;