import React from 'react';
import {StyleSheet, Text,KeyboardAvoidingView,Button, TextInput, View} from 'react-native';

const ForgetpasswordScreen = () => {
  return (
    <View>
      <View>
      <KeyboardAvoidingView>
        <Text> Forget password Screen</Text>
        <TextInput placeholder="Enter email" />
        </KeyboardAvoidingView>
        <Button title="Forget Password" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
export default ForgetpasswordScreen;