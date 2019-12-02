import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import constants from './../config/constants';
import colors from './../config/colors';

export default class ButtonScale extends Component {
    render() {
        const { content, style, onPress } = this.props
        return (
            <TouchableScale
                style={style ? style : styles.buttonDefaultStyle}
                friction={90} //
                tension={100} // These props are passed to the parent component (here TouchableScale)
                activeScale={0.95} //
                onPress={onPress}
            >
                {content}
            </TouchableScale>
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