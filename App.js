// import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from './src/screens/OnboardingScreen';

// import LoadStates from './src/components/LoadStates';

const AuthenticationStack = createStackNavigator();
const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
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
