import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Button,
} from 'react-native';
import {useForm} from 'react-hook-form';

import SocialLogin from '../components/socialLogin/SocialLogin';
import Input from '../components/input/Input';

const LoginScreen = (props) => {
  const {navigation} = props;
  const {control, handleSubmit, errors} = useForm();

  const onSubmit = (data) => {
    console.log('Login Screen, Data is: ', data);
  };

  return (
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
          secureTextEntry
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
      </View>
      <SocialLogin />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  btn: {
    marginTop: 10,
  },
});

export default LoginScreen;
