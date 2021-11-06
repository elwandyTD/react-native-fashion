import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Animated, { Extrapolate, interpolate } from 'react-native-reanimated';

const Dot = ({ index, currentIndex }) => {
	const opacity = interpolate(currentIndex, {
		inputRange: [index - 1, index, index + 1],
		outputRange: [0.5, 1, 0.5],
		extrapolate: Extrapolate.CLAMP
	});
	const scale = interpolate(currentIndex, {
		inputRange: [index - 1, index, index + 1],
		outputRange: [1, 1.25, 1],
		extrapolate: Extrapolate.CLAMP
	});

	return (
		<Animated.View
			style={[styles.dot, {
				opacity,
				transform: [{ scale }]
			}]}
		/>
	);
}

export default Dot;

const styles = StyleSheet.create({
	dot: {
		width: 8,
		height: 8,
		backgroundColor: '#2CB9B0',
		borderRadius: 4,
		margin: 4
	}
});