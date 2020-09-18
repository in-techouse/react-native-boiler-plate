import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './src/screens/LoginScreen';
import ForgetpasswordScreen from './src/screens/ForgetpasswordScreen';
import RegisterationScreen from './src/screens/RegisterationScreen';
import HomeScreen from './src/screens/HomeScreen';

import {Provider as AuthProvider} from './src/context/AuthContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Forget" component={ForgetpasswordScreen} />
          <Stack.Screen name="Register" component={RegisterationScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
