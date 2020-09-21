import React from 'react';
import {StyleSheet, View} from 'react-native';
import GoogleLogin from './GoogleLogin';
// import FacebookLogin from './FacebookLogin';

const SocialLogin = () => {
  return (
    <View>
      <GoogleLogin />
      {/* <FacebookLogin /> */}
    </View>
  );
};

export default SocialLogin;

const styles = StyleSheet.create({});
