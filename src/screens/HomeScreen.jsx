import { Pressable, StyleSheet, Text, View } from 'react-native'
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
import { useDispatch, useSelector } from 'react-redux';
import { updateFirstName } from '../utils/redux/slices/User';
const HomeScreen = () => {
    const user = useSelector((state) => state.user);
    console.log("user", user);

    const dispatch = useDispatch();

    // need to change the header title based on user click

    return (
        <SafeAreaView style={styles.container}>
        
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24
    }
})

// Now lets say, i wanna perform some actions uisng redux toolkit
// So we'll be using something known as dispatch.
// Note: updateFirstName we are passing a object as a payload..hence
// we need to destructure it here like that..