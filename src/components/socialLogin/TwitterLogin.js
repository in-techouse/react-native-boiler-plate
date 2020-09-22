import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import {NativeModules} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const {RNTwitterSignIn} = NativeModules;

RNTwitterSignIn.init(
  'TWITTER_CONSUMER_KEY',
  'TWITTER_CONSUMER_SECRET',
);
async function onTwitterButtonPress() {
  // Perform the login request
  const {authToken, authTokenSecret} = await RNTwitterSignIn.logIn();

  // Create a Twitter credential with the tokens
}

const TwitterLogin = () => {
  return (
    <View style={{marginVertical: 10}}>
      <Icon.Button
        name="twitter"
        backgroundColor="#00acee"
        onPress={() =>
          onTwitterButtonPress().then(() =>
            console.log('Signed in with Twitter!'),
          )
        }>
        <Text style={{marginLeft:65,color:'white'}}>Login with Twitter</Text>
      </Icon.Button>
    </View>
  );
};

export default TwitterLogin;

const styles = StyleSheet.create({});
