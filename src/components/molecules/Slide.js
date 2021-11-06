import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';	

const {width, height} = Dimensions.get('window');

const Slide = ({ title = '', right = false }) => {
	const transform = [
		{ translateY: (SLIDE_HEIGHT - 100) / 2 },
		{ translateX: right ? (width / 2) - 50 : (-width / 2) + 50 },
		{ rotate: right ? '-90deg' : '90deg' }
	];

	return (
		<View style={styles.container}>
			<View style={[styles.titleContainer, { transform }]}>
				<Text style={styles.title}>{title}</Text>
			</View>
		</View>
	);
}


export const SLIDE_HEIGHT = 0.61 * height;
export default Slide;

const styles = StyleSheet.create({
	container: {
		width
	},
	titleContainer: {
		height: 100,
		justifyContent: 'center'
	},
	title: {
		fontSize: RFPercentage(11),
		lineHeight: RFPercentage(11),
		fontFamily: 'SF-Pro-Text-Bold',
		color: 'white',
		textAlign: 'center'
	}
});