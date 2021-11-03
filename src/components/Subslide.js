import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Button from './atoms/Button';

const Subslide = ({ subtitle, description, last, onPress = () => {} }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.subtitle}>{subtitle}</Text>
			<Text style={styles.description}>{description}</Text>
			<Button
				label={last ? "Let's get started" : 'Next'}
				variant={last ? 'primary' : 'default'}
				{...{ onPress }}
			/>
		</View>
	);
}

export default Subslide;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 44
	},
	subtitle: {
		marginBottom: 12,
		fontSize: 22,
		fontFamily: 'SF-Pro-Text-Semibold',
		color: '#0C0D34',
		lineHeight: 30,
		textAlign: 'center'
	},
	description: {
		fontSize: 16,
		fontFamily: 'SF-Pro-Text-Regular',
		color: '#0C0D34',
		lineHeight: 22,
		textAlign: 'center',
		marginBottom: 40
	},
});