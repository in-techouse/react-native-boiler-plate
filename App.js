import 'react-native-gesture-handler';
import React from 'react';
import {Modal, View , Text,StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import InternetCheck from './src/components/interntcheck/InternetCheck';
import LoginScreen from './src/screens/LoginScreen';
import ForgetpasswordScreen from './src/screens/ForgetpasswordScreen';
import RegisterationScreen from './src/screens/RegisterationScreen';
import HomeScreen from './src/screens/HomeScreen';
import PhoneLoginScreen from './src/screens/PhoneLoginScreen';
import OTPScreen from './src/screens/OTPScreen';
import Maps from './src/screens/Maps';

import {Provider as AuthProvider} from './src/context/AuthContext';

const Stack = createStackNavigator();

const App = () => {
  const netInfo = useNetInfo();
  const net = netInfo.isConnected;

  return (
    <>
       <InternetCheck />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Forget" component={ForgetpasswordScreen} />
          <Stack.Screen name="Register" component={RegisterationScreen} />
          <Stack.Screen name="Phone" component={PhoneLoginScreen} />
          <Stack.Screen name="OTP" component={OTPScreen} />
          <Stack.Screen name="Map" component={Maps} />
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


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
