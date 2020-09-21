import React, {useState} from 'react';
import {Button} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import { set } from 'react-native-reanimated';

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
    <>
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
        
      />
    </>
  );
};

export default GoogleLogin;
