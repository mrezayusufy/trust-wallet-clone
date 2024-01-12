"use client"
import React, { Suspense } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import { Image } from 'expo-image';
// import { useSQLiteContext } from 'expo-sqlite/next';
import { Link } from 'expo-router';
import { coinList, ICoin } from '../../constants/coinList';

interface coinListProps {
  amount?: number;
}

const CoinsList = ({amount = -1} : coinListProps) => {
  // const [coins, setCoins] = React.useState<ICoin[]>([]);
  // const db = useSQLiteContext();
  // React.useEffect(() => {
  //   async function setup() {
  //     const result = await db.getAllAsync<ICoin>('SELECT * FROM coins');
  //     setCoins(result);
  //   }
  // setup(); 
  // },[])
  return (
      <Suspense fallback={<Text>Loading...</Text>}>
        <ScrollView className='px-5'>
        {coinList.slice(0, amount).map((c, index) => (
          <RenderItem item={c} key={index}/>
        ))}
      </ScrollView>
      </Suspense>
  );
};

export default CoinsList;

const RenderItem = ({item}: {item: ICoin}) => {
  
  return <Link href={{
    pathname: "/crypto/[id]",
    params: { id: item.coin }
  }} asChild>
  <Pressable>
    <View className="flex-row items-center flex-1 mt-4 " >
      <Image
        className="w-12 h-12 mr-4 rounded-full"
        source={item.icon}
        transition={1000} />
      <View className="flex-1 flex-row justify-between border-b-0.5 border-b-gray-300 pb-3">
        <View className="mr-auto">
          <Text className="mb-2 text-lg font-medium opacity-80" >{item.title}</Text>
          <View className="flex-row">
            <Text className="pr-1 font-medium opacity-50">{item.currency === 'USD' && "$"}{item.price}</Text>
            <Text className="text-green-500">{item.percentage}</Text>
          </View>
        </View>
        <View className="flex-col items-end justify-between flex-1" >
          <Text className="text-lg font-medium opacity-80">{item.amount} {item.coin}</Text>
          {item.amount !== 0 && <Text className="text-sm font-medium opacity-50">{item.currency === 'USD' && "$"}{item.fiat}</Text>}
        </View>
      </View>
    </View>
  </Pressable>
  </Link>
}
 