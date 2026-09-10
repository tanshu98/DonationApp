import { View, Text, TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Input = props => {
  console.log('props', props);

  const [value, setValue] = useState('');
  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        placeholder={props.placeholder ? props.placeholder : null}
        style={styles.input}
        value={value}
        // onChangeText={setValue(value)}
        onChangeText={val => {
          setValue(val);
          props.onChangeText(val);
        }}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
};

Input.defaultProps = {
  onChangeText: () => {}, // by default empty func
  keyboardType:'default',
  secureTextEntry: false,
};
Input.propTypes = {
    keyboardType: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  secureTextEntry: PropTypes.bool,
};

export default Input;
const styles = StyleSheet.create({
  label: {
    fontFamily: 'Inter 18px',
    fontWeight: '400',
    fontSize: 12,
    color: '#36455A',
    lineHeight: 15,
  },
  input: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(167,167,167,0.5)',
  },
});
