

import { Text, View, StyleSheet } from 'react-native'
import { Thumbnail, Card, CardItem, Body, Left } from 'native-base';
import { ListItem, Button, CheckBox } from 'react-native-elements'

import { Image } from 'react-native'
import cStyle from './../../../base/styles/pendingStyle'
import constants from './../../../base/config/constants'

import React, { Component } from 'react';

export default class PendingItem  extends Component {

    constructor(props) {
        super(props);
        this.state = {
          status:false,
         
        }
      }
  render() {
      const {item} = this.props
    return (
        <View style={cStyle.imageStyle}
        // style={{ height: 300 }}
        >

            <View >
                <Thumbnail square source={{
                    uri: item.avatar ? item.avatar : constants.NO_IMAGE_LINK
                }}
                    style={{ width: 120, height: 110, borderRadius: 6 }}

                // style={{ height: 300 }}
                // onPress={() => console.log('getItemHandle')} 
                />
            </View>
            <View style={cStyle.styleview1}>
                <View style={{flexDirection:'row'}}>

                <Text style={cStyle.textStyle1}>{item.type}</Text>
                <CheckBox
                    containerStyle={{marginLeft:50}}
                    checked={this.state.status}
                    size={20}
                    onPress={()=> this.setState({status:!this.state.status})}
                />
             </View>
                <Text style={cStyle.textNameStyle1}>{item.name}</Text>

                <Text note numberOfLines={1} style={cStyle.textPrice1}>{item.price}</Text>
                <Text style={cStyle.textAddress1}>{item.address}</Text>
        
               
            </View>
           
        </View>
    );
  }
}

