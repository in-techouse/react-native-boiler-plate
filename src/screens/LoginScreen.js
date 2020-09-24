import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Button,
  ScrollView,
} from 'react-native';
import {useForm} from 'react-hook-form';

import SocialLogin from '../components/socialLogin/SocialLogin';
import Input from '../components/input/Input';

const LoginScreen = (props) => {
  const {navigation} = props;
  const {control, handleSubmit, errors} = useForm();

  const onSubmit = (data) => {
    console.log('Login Screen, Data is: ', data);
    navigation.navigate('Home');
  };
  const [iconvalue, seticonvalue] = useState('eye');
  const [secureTextEntry, setsecureTextEntry] = useState(true);
  const onclicked = () => {
    seticonvalue(iconvalue === 'eye' ? 'eye-slash' : 'eye');
    setsecureTextEntry(!secureTextEntry);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <KeyboardAvoidingView>
          <Text style={{alignSelf: 'center'}}> Login Screen</Text>
          <Input
            placeholder="Enter you email"
            name="email"
            control={control}
            error={errors.email}
            keyboardType="email-address"
            validationRules={{
              required: {
                value: true,
                message: 'Email is required',
              },
              minLength: {
                value: 5,
                message: 'Email address is invalid',
              },
            }}
          />
          <Input
            placeholder="Enter you password"
            name="password"
            control={control}
            error={errors.password}
            keyboardType="default"
            secureTextEntry={secureTextEntry}
            iconvalue={iconvalue}
            onclicked={onclicked}
            validationRules={{
              required: {
                value: true,
                message: 'Password is required',
              },
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            }}
          />
        </KeyboardAvoidingView>

        <View style={styles.btn}>
          <Button
            style={styles.btn}
            title="Sign in"
            onPress={handleSubmit(onSubmit)}
          />
          <View style={styles.btn}>
            <Button
              title="Forget Password"
              onPress={() => navigation.navigate('Forget')}
            />
          </View>
          <View style={styles.btn}></View>
          <Button
            title="Register"
            onPress={() => navigation.navigate('Register')}
          />
          <View style={styles.btn}></View>
          <Button
            title="Sign in with Phone NO"
            onPress={() => navigation.navigate('Phone')}
          />
        </View>
        <Text style={styles.signline}>
          {' '}
          ──────────── Sign in With ────────────
        </Text>
        <SocialLogin />
        <Text style={styles.signline}> ────────────── MAPS ─────────────</Text>
        <Button title="MAP" onPress={() => navigation.navigate('Map')} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  btn: {
    marginTop: 10,
  },
  signline:{
    marginVertical:20,
  },
});

export default LoginScreen;
