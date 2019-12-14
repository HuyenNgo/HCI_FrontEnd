import React from 'react';
import { Text, View, Image } from 'react-native';
import { Button,Icon } from 'react-native-elements'
import { ListItem, Thumbnail, Card, CardItem, Body, Left } from 'native-base';
const UtilitiesItem = (params) => {

    return (

        <View style={{ paddingLeft: '3%' }}>
            <Button
                icon={
                    <Icon

                        name={params.item.name}
                        type='material'
                        color='#C8C8C8'
                        size={18}
                        iconStyle={{marginRight:5,}}
                    />

                }
                iconLeft
                title={params.item.titile}
                buttonStyle={{ borderColor: '#B7B7B7', borderWidth: 1, borderRadius: 20, marginTop: 10, width: 100, height: 35 }}
                titleStyle={{ fontSize: 13, color: '#B7B7B7' }}
                containerStyle={{ marginTop: 10 }}

                type='outline'
            />

        </View>
    )
};

export default UtilitiesItem;
