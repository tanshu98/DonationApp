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
const HomeScreen = () => {
  const user = useSelector(state => state.user);
  const categories = useSelector(state => state.categories);
  const donations = useSelector(state => state.donations);
  console.log("donations", donations);
  
  const dispatch = useDispatch();
  // dispatch(resetToInitialState());
  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
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
              <Header title={user.firstName + ' ' + user.lastName[0] + '.👋'} />
            </View>
          </View>
          <Image
            source={{ uri: user.profileImage }}
            resizeMode="contain"
            style={styles.profileImage}
          />
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
                if(isLoadingCategories) {
                    return;
                }
              console.log('User has reached the end and we are getting more data for page number', categoryPage);

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
});

// Basic Idea in Pagination
// We display List based on user scroll
// So, we will be defining new CategoryList which we will display on user scroll
// And then we need to define how many items do we wanna show per page..i.e cateogoryPageSize
