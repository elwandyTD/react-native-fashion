import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

import Button from './atoms/Button';

const { width } = Dimensions.get('window');

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
		padding: 44,
		paddingBottom: 12
	},
	subtitle: {
		marginBottom: RFPercentage(1.2),
		fontSize: RFPercentage(3.25),
		fontFamily: 'SF-Pro-Text-Semibold',
		color: '#0C0D34',
		lineHeight: RFPercentage(3.2),
		textAlign: 'center'
	},
	description: {
		fontSize: RFPercentage(2),
		fontFamily: 'SF-Pro-Text-Regular',
		color: '#0C0D34',
		lineHeight: RFPercentage(3.1),
		textAlign: 'center',
		marginBottom: RFPercentage(4.2)
	},
});