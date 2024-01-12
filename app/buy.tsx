import React from "react"
import { View, TextInput } from "react-native"
import { Stack } from "expo-router" 
import CoinsList from "../src/components/CoinsList"
import Colors from "../src/constants/Colors"
// import { useSQLiteContext } from 'expo-sqlite/next';

const BuyScreen = () => {
    // const db = useSQLiteContext();
    // const [coins, setCoins] = React.useState<ICoin[]>(); 
    // React.useEffect(() => {
    //     async function setup() {
    //         const result = await db.getAllAsync<ICoin>('SELECT * FROM coins');
    //         setCoins(result);
    //     }
    //     setup(); 
    // }, []);
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