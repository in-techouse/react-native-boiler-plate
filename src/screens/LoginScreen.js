import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function LoginScreen({navigation}) {
  return (
    <View>
      <Text> Login Screen</Text>
      <TextInput placeholder="email" />
      <TextInput placeholder="password" />
      <TouchableOpacity onPress={() => navigation.navigate('forget')}>
        <Text>Forget Password</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text>Dont't Have Account Click here to Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
