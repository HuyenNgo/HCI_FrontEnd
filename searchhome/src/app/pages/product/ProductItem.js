import React from 'react';
import { Text, View } from 'react-native';
import {  ListItem, Thumbnail, Card, CardItem, Body,Left  } from 'native-base';
const ProductItem = (params) => {
    
    return (
    <ListItem thumbnail button={true}
            // style={{ height: 300 }}
            onPress={() => console.log('getItemHandle')}
        >
            <Left>
                <Thumbnail square source={{
                    uri: params.item.avatar ? params.item.avatar : constants.NO_IMAGE_LINK
                }} />
            </Left>
            <Body>
                <Text>{params.item.name}</Text>
                <Text note numberOfLines={1}>{params.item.price}</Text>
            </Body>
        </ListItem>
)};

export default ProductItem;
