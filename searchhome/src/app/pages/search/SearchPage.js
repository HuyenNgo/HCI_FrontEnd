import React, { Component } from 'react'
import { StyleSheet,Text, View } from 'react-native'
import  BaseComponent from "../../../base/components/BaseComponent";

export default class SearchPage extends BaseComponent {
    constructor(props) {
        super(props);
        
    }
    render() {    
    return (
      
      <View>
        <Text > Cart </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffc1c1',
  }
});