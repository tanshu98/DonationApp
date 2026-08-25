import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header';
import Button from '../components/Button';
import Tab from '../components/Tab';
import Badge from '../components/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Search from '../components/Search';
import SingleDonationItem from '../components/SingleDonationItem';
import { Cactus } from '../utils/Images';
const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Search onSearch={(val) => console.log(val)
            } />
            <View style={styles.imageContainer}>
                <SingleDonationItem image={Cactus} badgeTitle={"Environment"} donationTitle={"Tree Cactus"} price={22} />
                <SingleDonationItem image={Cactus} badgeTitle={"Environment"} donationTitle={"Tree Cactus"} price={22} />

            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    imageContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:24
    }
})