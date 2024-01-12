import { useLocalSearchParams, Stack } from 'expo-router';
import * as React from 'react';
import { Text, SafeAreaView, View, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image } from 'expo-image';
import { coinList } from '../../src/constants/coinList';
import Colors from '../../src/constants/Colors';
import TransactionList from '../../src/components/TransactionList';
import { ReceiveIcon, SendIcon, SwapIcon } from '../../src/components/icons';

export default function Page() {
  const { id } = useLocalSearchParams();
  const coin = coinList.find(i => i.coin === id);
  return (
    <SafeAreaView className="flex-col justify-start flex-1 mt-3 ">
       <Stack.Screen options={{
            headerStyle: {
                backgroundColor: Colors.light.primary,
            },
            contentStyle: {backgroundColor: "white"},
            statusBarColor: Colors.light.primary,
            headerTintColor: Colors.light.textLight,
            headerTitle: () => <Text className="text-xl font-extrabold text-white">{coin?.title} ({coin?.coin})</Text>,
            headerRight: () => <View className='flex-row items-center gap-3'>
            <Text className='text-white bg-white/10 px-1.5 py-1 text-xs rounded-sm'>Buy</Text>
            <View className="w-5 h-5 scale-75 border-2 border-white rounded-sm opacity-80">
              <MaterialIcons name='show-chart' size={16} color={"white"}/></View>
            </View>
        }}/>
      <View className='flex-row justify-between px-3'>
        <Text className='text-xs'>COIN</Text>
        <View className='flex-row gap-2'>
          <Text className="text-gray-400">{currency(coin?.currency)}{coin?.price}</Text>
          <Text className="text-red-500">{coin?.percentage}</Text>
        </View>
      </View>
      {/* icon */}
      <View className="items-center">
        <Image
          className="rounded-full w-14 h-14"
          source={coin?.icon}
          transition={1000} />
      </View>
      {/* amount */}
      <Text className='mt-3 text-xl text-center'>{coin?.amount} {coin?.coin}</Text>
      <Text className='mt-1 text-center text-gray-500'>≈ {currency(coin?.currency)}{coin?.fiat}</Text>
      {/* functionality */}
      <View className="flex-row justify-center py-3">
        <View className="items-center gap-2">
          <Pressable onPress={() => router.push("/send") } className="flex flex-col items-center justify-center w-12 rounded-full bg-primary aspect-square">
              <View className='scale-75'><SendIcon/></View>
          </Pressable>
          <Text className="text-primary">Send</Text>
        </View>
        <View className="items-center gap-2 mx-5">
          <Pressable onPress={() => router.push("/receive") } className="flex flex-col items-center justify-center w-12 rounded-full bg-primary aspect-square">
            <View className='scale-75'><ReceiveIcon/></View>
          </Pressable>
          <Text className="text-primary">Received</Text>
        </View> 
        <View className="items-center gap-2">
          <Pressable onPress={() => router.push("/swap") } className="flex flex-col items-center justify-center w-12 rounded-full bg-primary aspect-square">
            <View className='scale-90'><SwapIcon/></View>
          </Pressable>
          <Text className="text-primary">Swap</Text>
        </View>
      </View>
      {/* divider */}
      <View className='mt-5 mb-2 border-b border-gray-200'></View>
      <View className='mb-8'>
        <Text className='px-3'>Dec 14, 2023</Text>
        <TransactionList/>
      </View>
    </SafeAreaView>
  );
};


const currency = (item: any) => item === "USD" ? "$" : "" 