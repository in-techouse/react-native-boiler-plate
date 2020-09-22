import React,{Component} from 'react';
import {StyleSheet, Button, TouchableOpacity,Text, View} from 'react-native';
import InstagramLogin from 'react-native-instagram-login';
import Icon from 'react-native-vector-icons/FontAwesome';



export default class InstaLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
    };
  }
 
  setIgToken = (data) => {
    console.log('data', data)
    this.setState({ token: data.access_token })
    console.log(data.access_token)
  }
 
  
  render() {
    return (
      <View >
        <Icon.Button
        
        name="instagram"
        backgroundColor="#3f729b"
        onPress={() => this.instagramLogin.show()}>
        <Text style={{marginLeft:65,color:'white'}}>Login with instagram</Text>
      </Icon.Button>

        <InstagramLogin
          ref={ref => (this.instagramLogin = ref)}
          appId='336315910938095'
          appSecret='36b4a41f1215103307e3f40fb2ebddd0'
          redirectUrl=''
          scopes={['user_profile', 'user_media']}
          onLoginSuccess={this.setIgToken}
          onLoginFailure={(data) => console.log("instagram does not log in",data)}
          modalVisible
          containerStyle={styles.insta}
        />
      </View>
    );
  }
}
 
 
const styles = StyleSheet.create({
  btn:{
    marginTop:10,
  }
});
 