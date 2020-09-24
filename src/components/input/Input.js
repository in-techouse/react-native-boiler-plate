import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Controller} from 'react-hook-form';
import Icon from 'react-native-vector-icons/FontAwesome5';

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
    onclicked,
    iconvalue,
  } = props;
  return (
    <View>
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder={placeholder}
              keyboardType={keyboardType}
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              secureTextEntry={secureTextEntry}
            />
            {onclicked ? (
              <Icon
                style={styles.icon}
                name={iconvalue}
                color="#000"
                onPress={onclicked}
                size={14}
              />
            ) : null}
          </View>
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
  err: {
    color: 'red',
    marginLeft: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000',
    margin: 10,
    borderRadius: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  icon: {
    padding: 10,
    marginTop: 5,
  },
});

export default Input;
