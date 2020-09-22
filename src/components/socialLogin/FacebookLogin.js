import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LoginButton, AccessToken } from 'react-native-fbsdk';

const FacebookLogin = () => {
  return (
    <View >
       <LoginButton
        style={{width:"100%",height:35}}
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/>
    </View>
  )
}

export default FacebookLogin;

const styles = StyleSheet.create({})
