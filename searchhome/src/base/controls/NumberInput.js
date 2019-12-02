import React, { Component } from 'react';
import { Platform, View, ActivityIndicator, TouchableOpacity } from 'react-native';
import NumberFormat from 'react-number-format'
import {
    Item,
    Label,
    Input
} from "native-base";

export default class NumberInput extends Component {

    
    render() {
      const {numberValue, title,onValueChanged,isDecimal} = this.props
     
        return(  <NumberFormat
            value={numberValue?numberValue:0}
            displayType={'text'}
            thousandSeparator={true}
            fixedDecimalScale={isDecimal?isDecimal:false}
            renderText={value =>
                <Item floatingLabel style={{ marginTop: 5 }}>
                    <Label>{title}</Label>
                    <Input
                        onChangeText={onValueChanged}
                        value={value}
                        keyboardType="numeric"
                    />
                </Item>
            }
        />)
    }
}