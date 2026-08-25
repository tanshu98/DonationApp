import PropTypes from 'prop-types';
import { Pressable, StyleSheet, Text } from 'react-native';

const Button = props => {
  return (
    <Pressable isDisabled={props.isDisabled} style={[styles.button, props.isDisabled && styles.disabled]}
    onPress={()=>props.onPress()}
    
    >
      <Text style={styles.title}>{props.title}</Text>
    </Pressable>
  );
};

Button.default = {
  isDisabled: false,
  onPress: ()=>{}
};

Button.propTypes = {
  title: PropTypes.string,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2979F2',
    height: 55,
    justifyContent: 'center',
    borderRadius: 50,
  },
  title: {
    fontFamily: 'Inter 18px',
    fontWeight: '500',
    lineHeight: 19,
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  disabled:{
    opacity: 0.5
  }
});
