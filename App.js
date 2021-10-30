import React from 'react';
import { NavigationContainer, InitialState } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingScreen from './src/screens/OnboardingScreen';

import LoadStates from './src/components/LoadStates';

const AuthenticationStack = createNativeStackNavigator();
const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthenticationStack.Screen name="Onboarding" component={OnboardingScreen} />
    </AuthenticationStack.Navigator>
  );
}

const App = () => {
  return (
    // <LoadStates>
    // </LoadStates>
    <NavigationContainer>
      <AuthenticationNavigator />
    </NavigationContainer>
  );
}

export default App;
