import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import  BaseComponent from "./../../../base/components/BaseComponent";
import { SearchBar } from 'react-native-elements';
import colors from '../../../base/config/colors';
export default class HomePage extends BaseComponent {
    constructor(props) {
        super(props);
        
    }
    state = {
      search: '',
    };
  
    updateSearch = search => {
      this.setState({ search });
    };
    render() { 
      const {search}=this.state;
    return (
      
      <View>
      
        <Text> textInComponent </Text>
        <SearchBar
         style={styles.searchDefaultStyle}
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      
      />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  searchDefaultStyle: {
      width: 120,
      height: 40,
      backgroundColor:colors.WHITE,
      margin:5
  }
  
})