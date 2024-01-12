// @ts-ignore
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  
import React from 'react';
import { router } from 'expo-router';
import { PriceTagIcon, ReceiveIcon, SendIcon, SwapIcon } from '../../src/components/icons';
import CoinsList from '../../src/components/CoinsList';
export default function TabWalletScreen() {
  return (
    <View className="flex-1 bg-primary">
      <View className="items-center px-3 pb-6 bg-primary">
        <Text className="text-3xl text-center text-white">{"$19,89"}</Text>
        <TouchableOpacity>
          <View className="flex-row items-center">
            <Text className="px-1 py-3 text-white opacity-70">Multi-Coin Wallet 1</Text>
          </View>
        </TouchableOpacity>
        <View className="flex-row justify-between gap-3">
          <View className="items-center gap-2">
            <Pressable onPress={() => router.push("/send") } className="flex flex-col items-center justify-center rounded-full bg-white/30 w-14 aspect-square">
                <SendIcon/>
            </Pressable>
            <Text className="text-white opacity-80">Send</Text>
          </View>
          <View className="items-center gap-2">
            <Pressable onPress={() => router.push("/receive") } className="flex flex-col items-center justify-center rounded-full bg-white/30 w-14 aspect-square">
                <ReceiveIcon/>
            </Pressable>
            <Text className="text-white opacity-80">Received</Text>
          </View>
          <View className="items-center gap-2">
            <Pressable onPress={() => router.push("/buy") } className="flex flex-col items-center justify-center rounded-full bg-white/30 w-14 aspect-square">
                <PriceTagIcon/>
            </Pressable>
            <Text className="text-white opacity-80">Buy</Text>
          </View>
          <View className="items-center gap-2">
            <Pressable onPress={() => router.push("/swap") } className="flex flex-col items-center justify-center rounded-full bg-white/30 w-14 aspect-square">
                <SwapIcon/>
            </Pressable>
            <Text className="text-white opacity-80">Swap</Text>
          </View>
        </View>
      </View>
      <View className='flex-1 bg-white rounded-t-xl'>
        <View>
          <CoinsList amount={5}/> 
        </View>
        <View>
          <TouchableOpacity >
            <View className="flex flex-row items-center justify-center gap-3 py-5">
              <Ionicons size={32} color={"gray"} name="options-outline"/>
              <Text className="text-base font-bold text-stone-500">Add Tokens</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}
