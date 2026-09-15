import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Search from '../components/Search';
import Tab from '../components/Tab';
// import Highlited_Img from '../utils/Images';
// import Highlited_Img from '../utils/Images/Highlited_Img'
import { Highlited_Img } from '../utils/Images';
import { updateSelectedCategoryId } from '../utils/redux/slices/Categories';
import { updateSelectedDonationId } from '../utils/redux/slices/Donations';
import SingleDonationItem from '../components/SingleDonationItem';
import { Routes } from '../navigation/Routes';
import { resetToInitialState } from '../utils/redux/slices/User';
import { logout } from '../api/User';
const HomeScreen = ({ navigation }) => {
    const user = useSelector(state => state.user);
    // console.log("user", user);

    const categories = useSelector(state => state.categories);

    const donations = useSelector(state => state.donations);

    const dispatch = useDispatch();
    // dispatch(resetToInitialState());
    const [categoryPage, setCategoryPage] = useState(1);
    const [categoryList, setCategoryList] = useState([]);
    const [donationItems, setDonationItems] = useState([]);

    const categoryPageSize = 4;
    const [isLoadingCategories, setIsLoadingCategories] = useState(false);

    const pagination = (items, pageNumber, pageSize) => {
        const startIndex = (pageNumber - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        if (startIndex >= items.length) {
            return [];
        }
        return items.slice(startIndex, endIndex);
    };

    // So we need to run the func everytime the selected
    // category item changes.
    useEffect(() => {
        const items = donations.items.filter(val =>
            val.categoryIds.includes(categories.selectedCategoryId),
        );
        setDonationItems(items);
    }, [categories.selectedCategoryId]);

    useEffect(() => {
        setIsLoadingCategories(true);
        setCategoryList(
            pagination(categories.categories, categoryPage, categoryPageSize),
        );
        setCategoryPage(prev => prev + 1);
        setIsLoadingCategories(false);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.headerIntroText}>Hello,</Text>
                        <View style={styles.username}>
                            <Header title={user.displayName + '.👋'} />
                        </View>
                    </View>
                    <View>
                        <Image
                            source={{ uri: user.profileImage }}
                            resizeMode="contain"
                            style={styles.profileImage}
                        />
                        <Pressable
                        onPress={async()=> {
                            dispatch(resetToInitialState());
                            // then we have to logout from the firebase too.
                            await logout();
                        }}
                        >
                            <Header type={2} title="Logout" color={"#156CF7"} />
                        </Pressable>
                    </View>


                </View>
                <View style={styles.searchBox}>
                    <Search />
                </View>
                <Pressable style={styles.Highlited_ImgContainer}>
                    <Image
                        source={Highlited_Img}
                        style={styles.Highlited_Img}
                        resizeMode="contain"
                    />
                    {/* <Image source={require('../assets/img/highlighted_image.png')} /> */}
                </Pressable>
                <View style={styles.headerCategory}>
                    <Header title={'Selected Category'} type={2} />
                </View>
                <View style={styles.categories}>
                    <FlatList
                        onEndReachedThreshold={0.5}
                        onEndReached={() => {
                            if (isLoadingCategories) {
                                return;
                            }
                            console.log(
                                'User has reached the end and we are getting more data for page number',
                                categoryPage,
                            );

                            setIsLoadingCategories(true);

                            let newData = pagination(
                                categories.categories,
                                categoryPage,
                                categoryPageSize,
                            );
                            if (newData.length > 0) {
                                setCategoryList(prev => [...prev, ...newData]); // update the list
                                setCategoryPage(prev => prev + 1); // increment the page
                            }
                            setIsLoadingCategories(false);
                        }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={categoryList}
                        renderItem={({ item }) => (
                            <View style={styles.categoryItem}>
                                <Tab
                                    TabId={item.categoryId}
                                    onPress={val => dispatch(updateSelectedCategoryId(val))}
                                    title={item.name}
                                    isInactive={item.categoryId !== categories.selectedCategoryId}
                                />
                            </View>
                        )}
                    />
                </View>
                {donationItems.length > 0 && (
                    <View style={styles.donationItemsContainer}>
                        {donationItems.map(val => {
                            const categoryInformation = categories.categories.find(
                                value => value.categoryId === categories.selectedCategoryId,
                            );
                            return (
                                <View
                                    key={val.donationItemId}
                                    style={styles.singleDonationItem}
                                >
                                    <SingleDonationItem
                                        onPress={selctedDonationId => {
                                            dispatch(updateSelectedDonationId(selctedDonationId));
                                            navigation.navigate(Routes.SingleDonationItem, {
                                                categoryInformation,
                                            });
                                        }}
                                        donationTitle={val.name}
                                        uri={val.image}
                                        price={parseFloat(val.price)}
                                        badgeTitle={categoryInformation.name}
                                        donationItemId={val.donationItemId}
                                    />
                                </View>
                            );
                        })}
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
    },
    header: {
        marginVertical: 20,
        marginHorizontal: 20,
        // backgroundColor:'red'
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerIntroText: {
        fontFamily: 'Inter 18px',
        fontSize: 16,
        lineHeight: 19,
        color: '#636776',
        fontWeight: '400',
    },
    username: {
        marginTop: 10,
    },
    profileImage: {
        height: 50,
        width: 50,
    },
    searchBox: {
        marginHorizontal: 24,
        // marginTop:20
    },
    Highlited_ImgContainer: {
        marginVertical: 24,
    },
    Highlited_Img: {
        width: '100%',
        height: 160,
    },
    categories: {
        marginHorizontal: 24,
    },
    categoryItem: {
        marginHorizontal: 10,
    },
    headerCategory: {
        marginHorizontal: 24,
        marginBottom: 16,
    },
    donationItemsContainer: {
        marginVertical: 20,
        marginHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    singleDonationItem: {
        maxWidth: '49%',
        marginBottom: 23,
    },
});

// Basic Idea in Pagination
// We display List based on user scroll
// So, we will be defining new CategoryList which we will display on user scroll
// And then we need to define how many items do we wanna show per page..i.e cateogoryPageSize

// 143 === MODULE==
// Lets focus on how to grab the donations,according to the categories
// that we are going to be selected here..
// So to do this, we will be running some kind of func to select
// the items from the items list here in the donation reducer
// according to the category id selected..
// so basically we will be matching the category ids present in
// the donaiton reducer with the category reducer
