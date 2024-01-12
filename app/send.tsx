import { Stack } from "expo-router"
import React from "react"
import { Text, SafeAreaView, TextInput } from "react-native"
import Colors from "../src/constants/Colors"
const SendScreen = () => {
    return <SafeAreaView>
        <Stack.Screen options={{
            headerStyle: {
                backgroundColor: Colors.light.primary,
            },
            statusBarColor: Colors.light.primary,
            headerTitle: props => <TextInput placeholder="Search..." placeholderTextColor={"#ccc"}/>
        }}/>
        <Text>Test SendScreen</Text>
    </SafeAreaView>
}
export default SendScreen;