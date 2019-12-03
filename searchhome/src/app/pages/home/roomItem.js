import React from 'react';

import { Text, View, StyleSheet } from 'react-native'
import {  ListItem, Thumbnail, Card, CardItem, Body,Left ,Image } from 'native-base';
import cStyle from './../../../base/styles/itemStyle'
const RoomItem = (params) => {
    
    return (
    <View  style={cStyle.imageStyle} thumbnail button={true}
            // style={{ height: 300 }}
            onPress={() => console.log('getItemHandle')}
        >
            <View >
                <Thumbnail square source={{
                    uri: params.item.avatar ? params.item.avatar : constants.NO_IMAGE_LINK
                }}
                style={{width: 140, height: 100,borderRadius:6}} />
            </View>
            <View style={cStyle.styleview}>
            
                <Text >{params.item.type}</Text>
                <Text>{params.item.name}</Text>

                <Text note numberOfLines={1} style={cStyle.textprice}>{params.item.price}</Text>
                <Text>{params.item.address}</Text>
               
            </View>
        </View>
)};

export default RoomItem;