import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';

import PropTypes from 'prop-types';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Input = props => {
  const [value, setValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder={props.placeholder ? props.placeholder : null}
          style={styles.input}
          value={value}
          onChangeText={val => {
            setValue(val);
            props.onChangeText(val);
          }}
          keyboardType={props.keyboardType}
          secureTextEntry={props.secureTextEntry && !showPassword}
        />

        {props.showPasswordToggle && (
          <Pressable
            style={styles.eyeButton}
            onPress={() => setShowPassword(prev => !prev)}
          >
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              size={18}
              color="#36455A"
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

Input.defaultProps = {
  onChangeText: () => {},
  keyboardType: 'default',
  secureTextEntry: false,
  showPasswordToggle: false,
};

Input.propTypes = {
  keyboardType: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  secureTextEntry: PropTypes.bool,
  showPasswordToggle: PropTypes.bool,
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

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(167,167,167,0.5)',
  },

  input: {
    flex: 1,
    paddingVertical: 12,
  },

  eyeButton: {
    padding: 10,
    marginRight: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
