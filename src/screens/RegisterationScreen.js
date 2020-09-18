import React from 'react';
import {
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Text,
  View,
  Button,
} from 'react-native';

const RegisterationScreen = (props) => {
  const {navigation} = props;
  return (
    <View>
      <KeyboardAvoidingView>
        <Text> Registration Screen Screen</Text>
        <TextInput placeholder="email" />
        <TextInput placeholder="password" />
        <TextInput placeholder="phone Number" />
      </KeyboardAvoidingView>
      <Button title="Register" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default RegisterationScreen;
