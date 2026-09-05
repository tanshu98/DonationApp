import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const Header = props => {
  const stylesToApply = () => {
    switch (props.type) {
      case 1:
        return styles.title1;
      case 2:
        return styles.title2;
      case 3:
        return styles.title3;
      default:
        return styles.title1;
    }
  };
  return (
    <View>
      <Text
        style={[stylesToApply(), props.color && { color: props.color }]}
        numberOfLines={props.numberOfLines ? props.numberOfLines : null}
      >
        {props.title}
      </Text>
    </View>
  );
};

Header.defaultProps = {
  title: '',
  type: 1,
  color: '#0000',
};

Header.propTypes = {
  title: PropTypes.string,
  type: PropTypes.number,
  color: PropTypes.string,
  numberOfLines: PropTypes.number,
};

export default Header;

const styles = StyleSheet.create({
  title1: {
    fontFamily: 'Inter 18pt',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 29,
  },
  title2: {
    fontFamily: 'Inter 18pt',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
  },
  title3: {
    fontFamily: 'Inter 18pt',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 19,
  },
});
