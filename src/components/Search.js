import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';

const Search = (props) => {
    // we will be needing a focus function to focus on the input feild, hence 
    // we using refs here
    // From this component, we will be handling the user search too..

    const textInputRef = useRef(null);
    const [search, setSearch] = useState('');

    const handleFocus = ()=> {
        textInputRef.current.focus();
    }

    const handleSearch = (searchValue)=> {
        setSearch(searchValue);
        props.onSearch(searchValue);
    }
  return (
    <Pressable style={styles.searchInputContainer} onPress={handleFocus}>
      <FontAwesomeIcon icon={faSearch} color='#25C0FF'  size={22} />
        <TextInput ref={textInputRef} style={styles.searchInput} placeholder='Search' 
        value={search}
        onChangeText={(value) => handleSearch(value)}
        
        />
    </Pressable>
  )
}

export default Search;

Search.defaultProps = {
    onSearch: ()=> {},
}
Search.prototypes = {
    onSearch: PropTypes.func,
}

const styles = StyleSheet.create({
    searchInputContainer:{
        backgroundColor:'#F3F5F9',
        flexDirection:'row',
        paddingHorizontal:16,
        alignItems:'center',
        height:50,
        borderRadius:15
    },
    searchInput:{
        flex:1,
        marginHorizontal:10,
        height:'100%',
        fontFamily:'Inter 18px',
        fontSize:14,
        lineHeight:14,
        color:'#686C7A'
    }
})