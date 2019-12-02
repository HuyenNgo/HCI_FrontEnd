import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import constants from './../config/constants';
import colors from './../config/colors';
import { SearchBar } from 'react-native-elements';
export default class SearchBarCustom extends Component {
    render() {
        
        return (
            <SearchBar
            fontColor="#c6c6c6"
            iconColor="#c6c6c6"
            shadowColor="#282828"
            cancelIconColor="#c6c6c6"
            backgroundColor="#353d5e"
            placeholder="Search here"
            onChangeText={text => {
              this.filterList(text);
            }}
            onPressCancel={() => {
              this.filterList("");
            }}
            onPress={() => alert("onPress")}
          />
          
        )
    }
}

const styles = StyleSheet.create({
    buttonDefaultStyle: {
        width: 120,
        height: 40,
        backgroundColor: colors.DODGER_BLUE,
        margin:5
    }
    
})