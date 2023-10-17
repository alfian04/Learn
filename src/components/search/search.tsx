import {TextInput} from 'react-native';
import React from 'react';
import {searchStyle} from './search.style';

export default function SearchBar() {
  return <TextInput style={searchStyle.container} placeholder="Search ..."  />;
}
