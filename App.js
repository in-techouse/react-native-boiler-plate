/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './src/screens/LoginScreen';
import ForgetpasswordScreen from './src/screens/ForgetpasswordScreen';
import RegisterationScreen from './src/screens/RegisterationScreen';
import {Provider as AuthProvider} from './src/context/AuthContext';

const Stack = createStackNavigator();
function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="forget" component={ForgetpasswordScreen} />
          <Stack.Screen name="Register" component={RegisterationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
