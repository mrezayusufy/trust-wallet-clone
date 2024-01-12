import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface TransferListProps {}

const TransferList = (props: TransferListProps) => {
  return (
    <View style={styles.container}>
      <Text>TransferList</Text>
    </View>
  );
};

export default TransferList;

const styles = StyleSheet.create({
  container: {}
});
