import React, { Component } from 'react'

import BaseComponent from "../../../base/components/BaseComponent";
import { StyleSheet, TextInput, ImageBackground, Text, View, Image, SafeAreaView, ScrollView, } from 'react-native'
import { FlatList, ButtonLoadMore } from '../../../base/controls';
import { Button, Icon, Header } from 'react-native-elements'
import { Container, ListItem, Thumbnail, Card, CardItem, Body, Left } from 'native-base';
import RoomateItem from './RoomateItem'
import cStyle from './../../../base/styles/roomate'

export default class RoomatesDetailPage extends BaseComponent {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <Container>
                <Header
                    
                        containerStyle={{backgroundColor:'#fff'}}
                        centerComponent={{ text: 'Phòng ở ghép', style: { color: '#000' } }}
                        leftComponent={
                            <Button 
                            icon={
                              <Icon
                
                                name='home'
                                type='material'
                                color='#4877F8'
                                // onPress={() => this.props.navigation.navigate('Location')}
                               
                              />
                
                            } 
                            type="clear"
                            
                           // onPress={() => this.props.navigation.navigate('Location')} 
                            />
                        }
                   
                />
               
                <SafeAreaView style={styles.container}>
                    <ScrollView  style={styles.scrollView}>
                        <View style={{ flexDirection: 'column',justifyContent:'flex-start'}}>
                            <View style={{padding:'2%' }}> 
                            <ImageBackground source={{
                                uri: 'data:image/jpeg;base64,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'
                            }}
                                style={{ with: '100%', height: 200 }}>
                            </ImageBackground>
                            </View>
                           <View>
                            <Text style={{fontWeight:'bold',fontSize:24,paddingLeft:'10%',paddingTop:'5%'}}>Ngân Thị Thanh Vũ</Text>
                            </View>
                            <View style={cStyle.container1}>
                                <Text style={cStyle.text1}> Giá khoảng</Text>
                                <Text style={cStyle.text}> 500 - 1,500,000 VNĐ</Text>

                            </View>
                            <View style={cStyle.container1}>
                                <Text style={cStyle.text1}> Tìm kiếm </Text>
                                <Text style={cStyle.text2} > Quận 3, Quận Bình Thạnh</Text>

                            </View>
                            <View style={cStyle.container1}>
                                <Text style={cStyle.text1}>Đối tượng</Text>
                                <Text style={cStyle.text}> Nữ</Text>

                            </View>
                            <View style={cStyle.container1}></View>
                        </View>

                    </ScrollView>
                </SafeAreaView>
               
                 <Button
                    icon={
                        <Icon

                            name='chat'
                            type='material'
                            color='#656565'
                            iconStyle={{ marginRight: 5 }}
                        />

                    }
                    iconLeft
                   containerStyle={{ paddingLeft: '25%', paddingBottom: '5%', paddingTop: '5%' }}
                    buttonStyle={{
                        backgroundColor: 'transparent',
                        borderColor: '#656565',
                        borderRadius: 10,
                        width: 200,
                        height: 40,
                        borderWidth: 1,
                        borderStyle: 'solid'

                    }}
                    titleStyle={{ color: '#656565' }}
                    title="Nhắn tin"
                    onPress={() => this.props.navigation.navigate('DetailRoomate')}
                ></Button> 
            </Container>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,

    },
    scrollView: {
        backgroundColor: 'transparent',
        //height: '100%'
    },

});
