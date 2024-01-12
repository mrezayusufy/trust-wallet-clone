import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	bb: {
		borderBottomWidth: 2,
	}
});
export const SendIcon = ({color = "white"}) => <Ionicons style={[styles.bb,{borderBottomColor: color}]} name='arrow-up' size={24} color={color} />
export const ReceiveIcon = ({color = "white"}) => <Ionicons style={[styles.bb,{borderBottomColor: color}]} name='arrow-down' size={24} color={color} />
export const PriceTagIcon = ({color = "white"}) => <Ionicons style={{ transform: [{scaleX: -1}]}} name='pricetag-outline' size={24} color={color} />
export const SwapIcon = ({color = "white"}) => <Ionicons name='swap-horizontal' size={24} color={color} />