import React from 'react';
import {
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Text,
  View,
  Button,
} from 'react-native';
import Input from '../components/input/Input';
import {useForm} from 'react-hook-form';

const RegisterationScreen = (props) => {
  const {navigation} = props;
  const {control, handleSubmit, errors} = useForm();

  const onSubmit = (data) => {
    console.log('Register Screen, Data is: ', data);
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <Text style={{alignSelf: 'center'}}> Registration Screen</Text>
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
        <Input
          placeholder="Enter you Number"
          name="number"
          control={control}
          error={errors.number}
          keyboardType="number-pad"
          validationRules={{
            required: {
              value: true,
              message: 'Number is required',
            },
            minLength: {
              value: 11,
              message: 'Number must be at least 11 characters',
            },
          }}
        />
      </KeyboardAvoidingView>
      <Button title="Register" style={styles.btn} onPress={handleSubmit(onSubmit)} />
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

export default RegisterationScreen;
