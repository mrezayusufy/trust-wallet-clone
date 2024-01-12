import React from 'react';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Text, View, StyleSheet, Pressable, ScrollView } from 'react-native';
import { ITransaction, TransactionsData } from '../../constants/transactions.data';
import { ReceiveIcon, SendIcon } from '../icons';

interface TransactionListProps {}

const TransactionList = (props: TransactionListProps) => {
  return (
    <React.Suspense fallback={<Text>Loading...</Text>}>
        <ScrollView className='px-5'>
        
        {TransactionsData.map((t, index) => (
          <RenderItem item={t} key={index}/>
        ))}
      </ScrollView>
      </React.Suspense>
  );
};

export default TransactionList;


const RenderItem = ({item}: {item: ITransaction}) => {
  
  return <Link href={{
    pathname: "/transaction/[transaction]",
    params: { transaction: item.id}
  }} asChild>
  <Pressable>
    <View className="flex-row items-center flex-1 mt-4 " >
      <View className='pr-5'>{item.from ? <ReceiveIcon color='#ccc'/> : <SendIcon color='#ccc'/>}</View>
      <View className="flex-1 flex-row justify-between border-b-0.5 border-b-gray-300 pb-3">
        <View className="mr-auto">
          <Text className="mb-2 text-lg font-medium opacity-80" >Transfer</Text>
          <View className="flex-row">
            <TrxType from={item.from} to={item.to} />
          </View>
        </View>
        <View className="items-end justify-center flex-1" >
          <Text className="opacity-75 text-md text-emerald-600">+{item.value} {item.crypto}</Text>
        </View>
      </View>
    </View>
  </Pressable>
  </Link>
}
interface ITrxType {
  from?: string;
  to?: string;
}
const TrxType = ({from, to}: ITrxType) => {
  return <Text className="pr-1 text-gray-400 text-[13px] w-3/2">{from && "From: " + shortenTransactionText(from, 20)} { to && "To: " + shortenTransactionText(to, 20)} </Text>
}

function shortenTransactionText(text: string, maxLength: number): string  {
  if (text.length <= maxLength) {
    return text;
  } else {
    const prefixLength = Math.ceil((maxLength - 3) / 2);
    const suffixLength = Math.floor((maxLength - 3) / 2);
    return text.substring(0, prefixLength) + " ... " + text.substring(text.length - suffixLength);
  }
}

