import PropTypes from 'prop-types';
import { useState } from 'react';
import {  StyleSheet, Text ,View} from 'react-native';

const Badge = props => {
  const [width, setWidth] = useState(0);

  const paddingHorizontal = 10;

  const tabWidth = {
    width: paddingHorizontal * 2 + width,
  };

  return (
    <View
      style={[
        styles.badge,
        tabWidth,
      ]}
    
    >
      <Text
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        style={[
          styles.title,
        ]}
      >
        {props.title}
      </Text>
    </View>
  );
};

Badge.propTypes = {
  title: PropTypes.string,
};

export default Badge;

const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#145855',
    height: 22,
    justifyContent: 'center',
    borderRadius: 50,
  },

  title: {
    fontFamily: 'Inter 18px',
    fontWeight: '600',
    lineHeight: 12,
    fontSize: 10,
    color: '#fff',
    textAlign: 'center',
  },
});