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
                    containerStyle={{ backgroundColor: '#fff' }}

                    leftComponent={
                        <Icon
                            name="keyboard-backspace"
                            type="material"
                            color="#000"
                            onPress={() => this.props.navigation.navigate('Home')}
                        >


                        </Icon>
                    }
                    centerComponent={{ text: 'Thông tin chi tiết phòng', style: { color: '#000', fontSize: 18 } }}
                    rightComponent={<Icon
                        name="share"
                        type="material"
                        color="#4877F8"
                    >


                    </Icon>}
                />
                <SafeAreaView style={styles.container}>
                    <ScrollView style={styles.scrollView}>

                        <View style={{ flex: 10, flexDirection: 'column', backgroundColor: '#F6F7F9', marginBottom: 20, }}>

                            <View style={{ backgroundColor: '#FFFFFF' }}>
                                <View style={{ flexDirection: 'row', padding: '3%' }}>
                                    <Image
                                        //We are showing the Image from online
                                        source={{ uri: 'data:image/jpeg;base64,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' }}

                                        //You can also show the image from you project directory like below
                                        // source={require("./../../../../assets/icons8-marker-25")}

                                        //Image Style
                                        style={{width:'100%',height:200}}
                                    />
                                </View>


                                <View style={{ paddingTop: '5%', paddingLeft: '5%' }}>
                                    <Text style={{ fontSize: 24 }}>Nguyễn Thuỳ Linh</Text>

                                </View>

                                <View style={{
                                    flexDirection: 'column',
                                    paddingTop: '5%',
                                    paddingLeft: '5%',
                                }}>

                                    <View style={{ flexDirection: 'row',paddingTop:'5%', width: '100%', borderBottomColor: '#F4F4F4', borderBottomWidth: 1 ,paddingBottom:'3%',marginRight:15}}>
                                        <Text style={styles.text}> GIÁ</Text>
                                        <Text style={styles.text3}>500,000 - 1,500,000 VNĐ</Text>

                                    </View>
                                    <View style={{ flexDirection: 'row', width: '100%', paddingTop: '10%', borderBottomColor: '#F4F4F4', borderBottomWidth: 1,paddingBottom:'3%' ,marginRight:15}}>
                                        <Text style={styles.text}>Địa chỉ</Text>
                                        <Text style={styles.text1}>Quận Tân Bình, Quận Bình Thạnh</Text>

                                    </View>
                                    <View style={{ flexDirection: 'row', width: '100%', paddingTop: '10%', borderBottomColor: '#F4F4F4', borderBottomWidth: 1 ,paddingBottom:'3%',marginRight:15}}>
                                        <Text style={styles.text}>Tìm kiếm</Text>
                                        <Text style={styles.text2}>Nữ</Text>

                                    </View>

                                </View>
                            </View>

                        </View>

                    </ScrollView>
                </SafeAreaView>

                <View style={{ flexDirection: 'row', paddingLeft: '5%', paddingTop: '5%',justifyContent:'center',alignItems:'center', }}>
                    <Button
                        icon={
                            <Icon

                                name='chat'
                                type='material'
                                color='#4877F8'
                                iconStyle={{ marginRight: 5 }}
                            />

                        }
                        iconLeft
                        containerStyle={{  paddingBottom: '5%' }}
                        buttonStyle={{
                            backgroundColor: '#fff',
                            borderColor: '#4877F8',
                            borderRadius: 10,
                            width: 200,
                            height: 40,
                            borderWidth: 1,
                            borderStyle: 'solid'

                        }}
                        titleStyle={{ color: '#4877F8' }}
                        title="Nhắn tin"></Button>

                </View>


            </Container >
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
    text:
    {
        fontSize: 15,

    },
    text1:
    {
        paddingLeft: '35%',
        width: '90%'
    },
    text2:
    {
        paddingLeft: '30%',
        width: '90%'
    },
    text3:
    {
        paddingLeft: '40%',
        width: '90%'
    }

});
