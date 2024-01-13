import React from "react"
import { View, TextInput } from "react-native"
import { Stack } from "expo-router" 
import CoinsList from "../src/components/CoinsList"
import Colors from "../src/constants/Colors"

const BuyScreen = () => { 
    return <View>
        <Stack.Screen options={{
            headerStyle: {
                backgroundColor: Colors.light.primary,
            },
            headerTintColor: Colors.light.textLight,
            statusBarColor: Colors.light.primary,
            headerTitle: props => <TextInput placeholder="Search..." placeholderTextColor={props.tintColor}/>
        }}/>  
        
        <CoinsList/>
    </View>
}
export default BuyScreen;