import React from 'react';


import { Text, View, StyleSheet } from 'react-native'
import { ListItem, Thumbnail, Card, CardItem, Body, Left, Image } from 'native-base';
import cStyle from './../../../base/styles/itemStyle'
import constants from './../../../base/config/constants'
const ResultItem = (params) => {

    return (
        <View style={cStyle.styleview}
            thumbnail button={true}
            // style={{ height: 300 }}
            onPress={() => console.log('getItemHandle')}
        >
            <View >
                <Thumbnail square source={{
                    uri: params.item.avatar ? params.item.avatar : constants.NO_IMAGE_LINK
                }}
                    style={{ width: 120, height: 120, borderRadius: 6 }} />
            </View>

            <View style={cStyle.styleviewContent}>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={cStyle.textStyle}>{params.item.type}</Text>
                    <Text style={cStyle.textDistance}> {params.item.distances}</Text>
                </View>

                <Text style={cStyle.textNameStyle}>{params.item.name}</Text>

                <Text note numberOfLines={1} style={cStyle.textPrice}>{params.item.price}</Text>
                <Text style={cStyle.textAddress}>{params.item.address}</Text>

            </View>
        </View>
    )
};

export default ResultItem;