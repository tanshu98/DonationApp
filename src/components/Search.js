import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useRef, useState } from 'react';
import { Pressable, StyleSheet, TextInput } from 'react-native';

// const Search = props => {
//   console.log('porps', props);

//   // we will be needing a focus function to focus on the input feild, hence
//   // we using refs here
//   // From this component, we will be handling the user search too..

//   const textInputRef = useRef(null);
//   const [search, setSearch] = useState('');

//   const handleFocus = () => {
//     textInputRef.current.focus();
//   };

//   const handleSearch = searchValue => {
//     setSearch(searchValue);
//     props.onSearch(searchValue);
//   };
//   return (
//     <Pressable style={styles.searchInputContainer} onPress={handleFocus}>
//       <FontAwesomeIcon icon={faSearch} color="#25C0FF" size={22} />
//       <TextInput
//         ref={textInputRef}
//         style={styles.searchInput}
//         placeholder={props.placeholder}
//         value={search}
//         onChangeText={value => handleSearch(value)}
//            placeholderTextColor="red"
//       />
//     </Pressable>
//   );
// };

// Search.defaultProps = {
//   onSearch: () => {},
//   placeholder: 'Search',
// };

// Search.propTypes = {
//   onSearch: PropTypes.func,
//   placeholder: PropTypes.string,
// };

// export default Search;

// console.log("defaultProps==",Search.defaultProps);

// Implementing the Search Component uisng new props syntax

const Search = ({ placeholder = 'Search', onSearch = () => {} }) => {
  const textInputRef = useRef(null);
  const [search, setSearch] = useState('');

  const handleFocus = () => {
    textInputRef.current.focus();
  };

  const handleSearch = searchValue => {
    setSearch(searchValue);
    onSearch(searchValue);
  };

  return (
    <Pressable style={styles.searchInputContainer} onPress={handleFocus}>
      <FontAwesomeIcon icon={faSearch} color="#25C0FF" size={22} />
      <TextInput
        ref={textInputRef}
        style={styles.searchInput}
        placeholder={placeholder}
        value={search}
        onChangeText={value => handleSearch(value)}
      />
    </Pressable>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchInputContainer: {
    backgroundColor: '#F3F5F9',
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
    height: 50,
    borderRadius: 15,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
    height: '100%',
    fontFamily: 'Inter_18pt',
    fontSize: 14,
    lineHeight: 14,
    color: '#686C7A',
  },
});
