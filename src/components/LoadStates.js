import React, { useState, useEffect, useCallback } from 'react';
import { Platform } from 'react-native';
import { NavigationContainer, InitialState } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

console.log(Platform.constants.Version, 'Version');

const NAVIGATION_STATE_KEY = `NAVIGATION_STATE_KEY-${Platform.constants.Version}`;

// const usePromiseAll = (promises = Promise, cb = () => { }) =>
// 	useEffect(() => {
// 		(async () => {
// 			await Promise.all(promises);
// 			cb();
// 		})
// 	});

const LoadStates = ({ children }) => {
	const [isNavigationReady, setIsNavigationReady] = useState(!__DEV__);
	const [initialState, setInitialState] = useState<InitialState | undefined>([]);
	
	useEffect(() => {
		const restoreState = async () => {
			try {
				const savedState = await AsyncStorage.getItem(NAVIGATION_STATE_KEY);
				const state = savedState ? JSON.parse(savedState) : undefined;
				
				setInitialState(state);
			} finally {
				setIsNavigationReady(true);
			}
		}

		if (!isNavigationReady) {
			restoreState();
		}
	}, [isNavigationReady]);

	const onStateChange = useCallback((state) => {
		AsyncStorage.setItem(state);
	}, []);

	return (
		<NavigationContainer {...{onStateChange, initialState}}>
			{children}
		</NavigationContainer>
	);
}

export default LoadStates;