import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import Badge from './Badge';
import Header from './Header';

const SingleDonationItem = props => {
  return (
    <View>
      <View>
        <View style={styles.badge}>
          <Badge title={props.badgeTitle} />
        </View>
        <Image resizeMode='contain' source={props.image} style={styles.image} />
      </View>
      <View style={styles.donationInformation}>
        <Header title={props.donationTitle} type={3} color={'#0A043C'} />
        <View style={styles.price}>
          <Header
            title={'$' + props.price.toFixed(2)}
            type={3}
            color={'#156CF7'}
          />
        </View>
      </View>
    </View>
  );
};

SingleDonationItem.propTypes = {
  image: PropTypes.oneOfType([PropTypes.number, PropTypes.object]).isRequired,
  badgeTitle: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default SingleDonationItem;

const styles = StyleSheet.create({
  image: {
    width: 155,
    height: 170,
  },
  badge: {
    position: 'absolute',
    zIndex: 1,
    top: 13,
    left: 10,
  },
  donationInformation: {
    marginTop: 16,
  },
  price:{
    marginTop:5
  }
});
