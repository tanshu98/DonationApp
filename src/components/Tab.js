import PropTypes from 'prop-types';
import { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const Tab = props => {
  const [width, setWidth] = useState(0);

  const paddingHorizontal = 33;

  const tabWidth = {
    width: paddingHorizontal * 2 + width,
  };

  return (
    <Pressable
      style={[
        styles.tab,
        props.isInactive && styles.inActiveTab,
        tabWidth,
      ]}
      onPress={()=> props.onPress(props.TabId)}
    >
      <Text
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        style={[
          styles.title,
          props.isInactive && styles.inActiveTitle,
        ]}
      >
        {props.title}
      </Text>
    </Pressable>
  );
};

Tab.defaultProps = {
  isInactive: false,
  onPress: () => {},
};

Tab.propTypes = {
  title: PropTypes.string,
  isInactive: PropTypes.bool,
  onPress: PropTypes.func,
  TabId: PropTypes.number.isRequired
};

export default Tab;

const styles = StyleSheet.create({
  tab: {
    backgroundColor: '#2979F2',
    height: 50,
    justifyContent: 'center',
    borderRadius: 50,
  },

  title: {
    fontFamily: 'Inter 18px',
    fontWeight: '500',
    lineHeight: 17,
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },

  inActiveTab: {
    backgroundColor: '#F3F5F9',
  },

  inActiveTitle: {
    color: '#79869F',
  },
});