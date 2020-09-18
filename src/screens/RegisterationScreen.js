import React from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';

export default function RegisterationScreen() {
  return (
    <View>
      <View>
        <Text> Registration Screen Screen</Text>
        <TextInput placeholder="email" />
        <TextInput placeholder="password" />
        <TextInput placeholder="phone Number" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
