import React from 'react';
import {StyleSheet} from 'react-native';
import {Input, Text, View, Item, Label} from 'native-base';
import {isEmpty} from '../../../utils/validators';

const CommonInput = ({
  placeholder,
  labelStyle,
  inputContainerStyle,
  inputStyle,
  name,
  inputType,
  label,
  secure = false,
  meta: {error, touched, warning},
  input,
}) => {
  const {value, ...inputProps} = input;
  return (
    <View style={styles.container}>
      <Item stackedLabel>
        <Label>{label}</Label>
        <Input
          secureTextEntry={secure}
          onChangeText={text => input.onChange(text)}
          {...inputProps}
        />
      </Item>
      {touched && error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // marginVertical: 10,
  },
  title: {
    fontSize: 18,
    color: '#434343',
    marginBottom: 5,
  },
  inputStyle: {
    height: 50,
    paddingTop: 10,
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#DFE4E8',
    height: 50,
  },
  iconStyle: {width: 25, height: 25, marginHorizontal: 10},
  errorText: {
    color: 'red',
    paddingVertical: 10,
    fontSize: 13,
  },
});

export default CommonInput;
