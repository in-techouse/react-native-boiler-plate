import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Button,
} from 'react-native';

const LoginScreen = (props) => {
  const {navigation} = props;
  return (
    <View>
    <KeyboardAvoidingView>
      <Text> Login Screen</Text>
      <TextInput placeholder="email" />
      <TextInput placeholder="password" />
      </KeyboardAvoidingView>
      
      <Button title="Sign in" onPress={() => navigation.navigate('Home')}/>
      <Button title="Forget Password" onPress={() => navigation.navigate('Forget')}/>
      <Button title="Register" onPress={() => navigation.navigate('Register')}/>
        
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
