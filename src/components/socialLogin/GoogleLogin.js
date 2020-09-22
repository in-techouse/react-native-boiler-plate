import React, {useState} from 'react';
import { Button,Text,View} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin';

import Icon from 'react-native-vector-icons/FontAwesome';

const signIn = async () => {
  try {
    
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    setuser(userInfo);
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};

GoogleSignin.configure({
  webClientId: '',
});

const GoogleLogin = () => {
  const [user, setuser] = useState({});
  return (
    <View style={{marginVertical:10}}>
      {/* <GoogleSigninButton
        style={{width:'100%', height: 45,marginVertical:10}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
        
      /> */}
      <Icon.Button
        name="google"
        backgroundColor="#db3236"
        onPress={signIn}>
        <Text style={{marginLeft:65,color:'white'}}>Login with Google</Text>
      </Icon.Button>
    </View>
  );
};

export default GoogleLogin;
