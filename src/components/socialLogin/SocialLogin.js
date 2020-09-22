import React from 'react';
import {StyleSheet, View} from 'react-native';
import GoogleLogin from './GoogleLogin';
import FacebookLogin from './FacebookLogin';
import InstaLogin from './InstaLogin';
import TwitterLogin from './TwitterLogin'; 

const SocialLogin = () => {
  return (
    <View>
      <GoogleLogin />
      <FacebookLogin />
      <TwitterLogin />
      <InstaLogin />

    </View>
  );
};

export default SocialLogin;

const styles = StyleSheet.create({});
