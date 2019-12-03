import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button,Icon } from 'react-native-elements';
import constants from './../config/constants';
import colors from './../config/colors';
import strings from './../config/strings';

export default class ButtonLoadMore extends Component {
    render() {
        const {  isAbleToLoadMore,style, onPress,title,loading,disabled ,buttonStyle,containerStyle} = this.props
        return (
            isAbleToLoadMore?   <Button
            icon={
                <Icon

                  name='refresh'
                  type='material'
                  color='#4877F8'
                  iconStyle={{ marginLeft: 60 }}
                />

              }
            buttonStyle={buttonStyle?buttonStyle:styles.buttonDefaultStyle}
            containerStyle={buttonStyle?buttonStyle:styles.buttonDefaultContainerStyle}
           
            loading={loading}
            disabled={disabled}
            onPress={onPress}
            type={"clear"}
          />:null
        )
    }
}

const styles = StyleSheet.create({
    buttonDefaultStyle: {
        width: 120,
        height: 40,
        backgroundColor: '#FFFFFF',
        
                      
    },
    buttonDefaultContainerStyle:
    {
        justifyContent:'center',
        paddingLeft:'20%'
    }
})