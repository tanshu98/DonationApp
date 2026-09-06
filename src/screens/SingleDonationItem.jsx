import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackButton from '../components/BackButton';
import Badge from '../components/Badge';
import Header from '../components/Header';
import Button from '../components/Button';

const SingleDonationItem = ({ navigation, route }) => {
    const donationItemInfo = useSelector(state => state.donations.selectedDonationInformation)
    console.log("donationItemInfo", donationItemInfo);
    console.log("route", route);
    const categoryInformation = route.params.categoryInformation;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.backButtonContainer} showsVerticalScrollIndicator={false} >
                <BackButton onPress={() => navigation.goBack()} />
                <Image source={{ uri: donationItemInfo.image }} style={styles.image} />
                <View style={styles.badge}>
                    <Badge title={categoryInformation.name} />

                </View>
                <Header type={1} title={donationItemInfo.name} />
                <Text style={styles.description}>{donationItemInfo.description}</Text>
            </ScrollView>
            <View style={styles.button}>
                <Button title={'Donate'} />
            </View>

        </SafeAreaView>
    )
}

export default SingleDonationItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    backButtonContainer: {
        marginHorizontal: 20,
        marginTop: 7
    },
    image: {
        marginTop: 12,
        marginBottom: 24,
        width: '100%',
        height: 240,
        borderRadius: 5
    },
    badge: {
        marginBottom: 16
    },
    description: {
        marginHorizontal: 7,
        marginTop: 7,
        fontFamily: 'Inter 18px',
        fontWeight: '400',
        fontSize: 14,
        marginBottom:10
    },
    button:{
        marginHorizontal:20
    }
})

// We need the badge info too, so we can either get it form reducers or
// we can use something knowns as params which we get form navigation Okk