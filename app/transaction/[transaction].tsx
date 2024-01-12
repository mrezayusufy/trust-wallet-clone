import { Stack, useLocalSearchParams } from 'expo-router';
import * as React from 'react';
import { Text, View } from 'react-native';
import Colors from '../../src/constants/Colors';
import { TransactionsData } from '../../src/constants/transactions.data';

interface TransferProps {}

const Transfer = (props: TransferProps) => {
  const { transaction } = useLocalSearchParams();
  const trx = TransactionsData.find(i => i.id === transaction);
  return (
    <View className='mt-3'>
      <Stack.Screen options={{
        title: "Transfer",
        headerStyle: {
          backgroundColor: Colors.light.primary
        },
        contentStyle: {
          backgroundColor: Colors.light.textLight
        },
        statusBarColor: Colors.light.primary,
        headerTintColor: Colors.light.textLight
      }}/>
      <Text className={`${trx?.to ? "text-red-700" : "text-emerald-600"} text-4xl opacity-75 text-center mt-5`}>
        {trx?.to ? "-": "+"}{trx?.value} {trx?.crypto}
      </Text>
      <Text className='text-center text-gray-500'>
        ≈ ${trx?.trxFee}
      </Text>
      <View className="px-6 py-5 border border-gray-300 rounded-lg shadow-sm">
        <View>
          <Text>Date</Text>
          <Text>{trx?.date}</Text>
        </View>
      </View>
    </View>
  );
};

export default Transfer;

