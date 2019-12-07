import React from 'react';
import { Text, View, Image } from 'react-native';
import { ListItem, Thumbnail, Card, CardItem, Body, Left } from 'native-base';
const RoomateItem = (params) => {

    return (
        <View
             style={{flexDirection: 'row', backgroundColor:'#fff',borderColor:'#F9F9F9',borderBottomWidth:1,marginBottom:20}}
          
        >
            <View style={{paddingTop:'8%'}}>
                
                <Image
                   source={{
                        uri: params.item.avatar ? params.item.avatar : constants.NO_IMAGE_LINK
                    }}
                    style={{ width: 120, height: 120, borderRadius: 120 / 2 }}
                    //onPress={() => this.props.navigation.navigate('DetailRoomate')}
                />
            </View>
            <View style={{paddingLeft:'10%'}}>
                <Text style={{marginTop:5,fontSize:18,fontWeight:'bold'}}>{params.item.name}</Text>
                <Text style={{marginTop:10,fontSize:13}}>Giá</Text>
                <Text style={{marginTop:3,fontSize:13}} note numberOfLines={1}>{params.item.price}</Text>
                <Text style={{marginTop:10,fontSize:13}}>Cần</Text>
                <Text style={{marginTop:3,fontSize:13}}>{params.item.gender}</Text>
                <Text style={{marginTop:10,fontSize:13}}>Địa chỉ</Text>
                <Text style={{marginTop:3,fontSize:13,marginBottom:5}}>{params.item.address}</Text>
            </View>
          </View>
    )
};

export default RoomateItem;
