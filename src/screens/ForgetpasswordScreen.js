import React from 'react';
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Button,
  View,
} from 'react-native';
import Input from '../components/input/Input';
import {useForm} from 'react-hook-form';

const ForgetpasswordScreen = () => {
  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (data) => {
    console.log('Forget Screen, Data is: ', data);
  };
  return (
    <View>
     <View style={styles.container}>
        <KeyboardAvoidingView>
          <Text style={{alignSelf: 'center'}}> Forget password Screen</Text>
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
        </KeyboardAvoidingView>
        <Button style={styles.btn} title="Forget Password" onPress={handleSubmit(onSubmit)} />
      </View>
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
export default ForgetpasswordScreen;
