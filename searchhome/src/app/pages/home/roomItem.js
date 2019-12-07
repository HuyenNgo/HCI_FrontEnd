import React from 'react';


import { Text, View, StyleSheet } from 'react-native'
import {   Thumbnail, Card, CardItem, Body,Left  } from 'native-base';
import { ListItem } from 'react-native-elements'

import {Image} from 'react-native'
import cStyle from './../../../base/styles/itemStyle'
import constants from './../../../base/config/constants'
const RoomItem = (params) => {
    
    return (
     <View  style={cStyle.imageStyle} 
             // style={{ height: 300 }}
           
            
        >
    
            <View >
                <Thumbnail square source={{
                    uri: params.item.avatar ? params.item.avatar : constants.NO_IMAGE_LINK
                }}
                style={{width: 150, height: 110,borderRadius:6}}
               
            // style={{ height: 300 }}
           // onPress={() => console.log('getItemHandle')} 
            />
            </View>
            <View style={cStyle.styleview1}>
            
                <Text style={cStyle.textStyle1}>{params.item.type}</Text>
                <Text style={cStyle.textNameStyle1}>{params.item.name}</Text>

                <Text note numberOfLines={1} style={cStyle.textPrice1}>{params.item.price}</Text>
                <Text style={cStyle.textAddress1}>{params.item.address}</Text>
               
            </View>
            </View>
)};

export default RoomItem;