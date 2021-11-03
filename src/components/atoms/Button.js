import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const Button = ({ variant = 'default', label = '', onPress = () => {} }) => {
	const backgroundColor = variant === 'primary' ? '#2CB9B0' : 'rgba(12, 13, 52, 0.05)';
	const color = variant === 'primary' ? 'white' : '#0C0D34';

	return (
		<RectButton style={[styles.container, { backgroundColor }]} {...{ onPress }}>
			<Text style={[styles.label, { color }]}>{label}</Text>
		</RectButton>
	)
}

export default Button;

const styles = StyleSheet.create({
	container: {
		height: 50,
		width: 245,
		borderRadius: 25,
		justifyContent: 'center',
		alignItems: 'center'
	},
	label: {
		fontSize: 15,
		fontFamily: 'SF-Pro-Text-Regular',
		textAlign: 'center'
	}
});