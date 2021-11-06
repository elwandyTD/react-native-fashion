import React, { useRef } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useValue, onScrollEvent, interpolateColor, useScrollHandler } from 'react-native-redash/lib/module/v1';
import Animated, { divide, multiply } from 'react-native-reanimated';

import Slide, { SLIDE_HEIGHT } from '../components/molecules/Slide';
import Subslide from '../components/Subslide';
import Dot from '../components/atoms/Dot';

const { width } = Dimensions.get('window');
const BORDER_RADIUS = 75;

const OnboardingScreen = () => {
	const scroll = useRef(null);
	const slides = [
		{ 
			title: 'Relaxed', 
			subtitle: 'Find Your Outfits', 
			description: "Confused about your outfit? Don't worry! Find the best outfit here!", 
			color: '#BFEAF5'
		},

		{ 
			title: 'Playful', 
			subtitle: 'Hear it First, Wear it First', 
			description: "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas", 
			color: '#BEECC4'
		},

		{ 
			title: 'Excentric', 
			subtitle: 'Your Style, Your Way', 
			description: "Create your individual & unique style and look amazing everyday", 
			color: '#FFE4D9'
		},

		{ 
			title: 'Funky', 
			subtitle: 'Look Good, Feel Good', 
			description: "Discover the latest trends in fashion and explore your personality", 
			color: '#FFDDDD'
		}
	]

	const { scrollHandler, x } = useScrollHandler();
	const backgroundColor = interpolateColor(x, {
		inputRange: slides.map((_, i) => i * width),
		outputRange: slides.map(slide => slide.color),
	});

	return (
		<View style={styles.container}>
			<Animated.View style={[styles.slider, { backgroundColor }]}>
				<Animated.ScrollView
					ref={scroll}
					horizontal
					snapToInterval={width}
					decelerationRate="fast"
					showsHorizontalScrollIndicator={false}
					scrollEventThrottle={1}
					bounces={false}
					{ ...scrollHandler }
				>
					{slides.map(({ title }, i) => (
						<Slide
							key={i}
							right={!!(i % 2)}
							{...{ title }}
						/>
					))}
				</Animated.ScrollView>
			</Animated.View>
			<View style={styles.footer}>
				<Animated.View style={{ ...StyleSheet.absoluteFillObject, backgroundColor }} />
				<View style={styles.footerContent}>
					<View style={styles.pagination}>
						{slides.map((_, index) => (
							<Dot key={index} currentIndex={divide(x, width)} {...{ index, x }} />
						))}
					</View>
					<Animated.View style={{
						flex: 1,
						flexDirection: 'row',
						width: width * slides.length,
						transform: [{ translateX: multiply(x, -1) }]
					}}>
						{slides.map(({ subtitle, description }, i) => (
							<Subslide
								key={i}
								last={i === slides.length - 1}
								onPress={() => {
									if (scroll.current) {
										scroll.current.scrollTo({ x: width * (i + 1), animated: true })
									}
								}}
								{...{ subtitle, description, x }}
							/>
						))}
					</Animated.View>
				</View>
			</View>
		</View>
	)
}

export default OnboardingScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	slider: {
		height: SLIDE_HEIGHT,
		borderBottomRightRadius: BORDER_RADIUS
	},
	footer: {
		flex: 1
	},
	footerContent: {
		flex: 1,
		backgroundColor: 'white',
		borderTopLeftRadius: BORDER_RADIUS
	},
	pagination: {
		...StyleSheet.absoluteFillObject,
		height: BORDER_RADIUS,
		minHeight: BORDER_RADIUS,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	}
});