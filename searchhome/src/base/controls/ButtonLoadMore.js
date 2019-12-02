import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import constants from './../config/constants';
import colors from './../config/colors';
import strings from './../config/strings';

export default class ButtonLoadMore extends Component {
    render() {
        const {  isAbleToLoadMore,style, onPress,title,loading,disabled ,buttonStyle,containerStyle} = this.props
        return (
            isAbleToLoadMore?   <Button
            buttonStyle={buttonStyle?buttonStyle:styles.buttonDefaultStyle}
            containerStyle={containerStyle}
            title={title?title:strings.LOAD_MORE}
            loading={loading}
            disabled={disabled}
            onPress={onPress}
          />:null
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