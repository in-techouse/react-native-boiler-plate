import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Controller} from 'react-hook-form';

const Input = (props) => {
  // console.log('Input Component Props are: ', props);
  const {
    name,
    control,
    error,
    keyboardType,
    secureTextEntry,
    placeholder,
    validationRules,
  } = props;
  return (
    <View>
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <TextInput
            placeholder={placeholder}
            keyboardType={keyboardType}
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            secureTextEntry={secureTextEntry ? secureTextEntry : false}
          />
        )}
        name={name}
        rules={validationRules}
        defaultValue=""
      />
      {error && <Text style={styles.err}>{error.message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 0.2,
    borderRadius: 6,
    margin: 10,
    paddingLeft: 10,
  },
  err: {
    color: 'red',
    marginLeft: 10,
  },
});

export default Input;
