import React, { Component } from 'react'
import BaseComponent from "../../../base/components/BaseComponent";
import { Header, Input, Button, Icon, CheckBox } from 'react-native-elements';
import { StyleSheet, Text, View, TextInput, ImageBackground, SafeAreaView, ScrollView, } from 'react-native'
import { Font } from "expo";
import { RadioButton } from 'react-native-paper';
import cStyles from '../../../base/styles/styles'




export default class Confirm extends BaseComponent {


   
    render() {
        return (

            <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'space-between', }}>
                {/* <View style={{ flex: 1, backgroundColor: 'transparent' }}>

                    <Header
                        containerStyle={{ backgroundColor: '#fff' }}
                        leftComponent={{
                            icon: 'menu',
                            color: '#000',
                            onPress:() => this.props.navigation.navigate('Information')
                          }}
                        
                        leftContainerStyle={{ marginTop: 20 }}
                        centerComponent={{ text: 'Đăng phòng', style: { color: '#000', fontSize: 20, marginTop: 20 } }}
                        rightComponent={{ text: 'Huỷ', style: { color: '#F21212', fontSize: 20, paddingRight: '10%', marginTop: 20 } }}

                    />
                </View> */}

                <View style={{ flex: 1, backgroundColor: 'transparent' }}>

                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'transparent', width: '100%', height: 100, padding: '5%' }}>


                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', width: 100, height: 50, backgroundColor: 'transparent', paddingLeft: '2%' }} >
                            <View style={{ flex: 1, flexDirection: 'row', width: 100, height: 20, backgroundColor: 'transparent' }} >
                                <View style={{ width: 10, height: 20, backgroundColor: 'transparent', }}>
                                </View>

                                <View style={{ width: 20, height: 20, backgroundColor: 'transparent', marginBottom: 20 }}>
                                    <ImageBackground source={require("./../../../..//assets/icons8-checkmark-25.png")}
                                        style={{ width: '100%', height: '100%', justifyContent: 'center' }} />
                                </View>
                                <View style={{ width: 70, height: 20, backgroundColor: 'transparent' }} >
                                    <Text style={{ color: 'rgba(18, 81, 242, 0.8)' }}>──────</Text>
                                </View>
                            </View>

                            <View style={{ width: 100, height: 30, backgroundColor: 'transparent' }}>
                                <Text > Vị trí</Text>
                            </View>

                        </View>



                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', width: 100, height: 50, backgroundColor: 'transparent', }} >
                            <View style={{ flex: 1, flexDirection: 'row', width: 100, height: 20, backgroundColor: 'transparent' }} >
                                <View style={{ width: 20, height: 20, backgroundColor: 'transparent' }} >
                                    <Text style={{ color: 'rgba(18, 81, 242, 0.8)' }}>──</Text>
                                </View>

                                <View style={{ width: 20, height: 20, backgroundColor: 'transparent', marginBottom: 20 }}>
                                    <ImageBackground source={require("./../../../..//assets/icons8-checkmark-25.png")}
                                        style={{ width: '100%', height: '100%', color: '#0F389F' }} />

                                </View>
                                <View style={{ width: 60, height: 20, backgroundColor: 'transparent' }} >
                                    <Text style={{ color: 'rgba(18, 81, 242, 0.8)' }}>─────</Text>
                                </View>
                            </View>
                            <View style={{ width: 100, height: 30, backgroundColor: 'transparent' }}>
                                <Text>Thông tin</Text>
                            </View>

                        </View>

                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', width: 100, height: 50, backgroundColor: 'transparent', }} >
                            <View style={{  flexDirection: 'row', width: 100, height: 20, backgroundColor: 'transparent' }} >
                                <View style={{ width: 20, height: 20, backgroundColor: 'transparent' }} >
                                    <Text style={{ color: 'rgba(18, 81, 242, 0.8)' }}>──</Text>
                                </View>
                                <View style={{ width: 20, height: 20, backgroundColor: 'transparent', marginBottom: 20 }}>
                                    <ImageBackground source={require("./../../../..//assets/icons8-checkmark-25.png")}
                                        style={{ width: '100%', height: '100%', justifyContent: 'center' }} />
                                </View>
                                <View style={{ width: 65, height: 20, backgroundColor: 'transparent' }} >
                                    <Text style={{ color: 'rgba(18, 81, 242, 0.8)' }}>──────</Text>
                                </View>
                            </View>
                            <View style={{ width: 100, height: 30, backgroundColor: 'transparent', marginLeft: 10 }}>
                                <Text>Hình ảnh</Text>
                            </View>

                        </View>

                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', width: 150, height: 50, backgroundColor: 'transparent' }} >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: 40, height: 20, backgroundColor: 'transparent' }} >
                                    <Text style={{ color: 'rgba(18, 81, 242, 0.8)' }}>────</Text>
                                </View>
                                <View style={{ width: 23, height: 20, backgroundColor: 'transparent', }}>
                                    <Icon name='home'
                                        color={'#4877F8'}
                                        style={{ fontSize: 20, color: '#4877F8', width: '100%', height: '100%', justifyContent: 'center' }} />
                                </View>
                                <View style={{ width: 60, height: 20, backgroundColor: 'transparent' }} >

                                </View>
                            </View>
                            <View style={{ width: 100, height: 30, backgroundColor: 'transparent', }}>
                                <Text style={{ marginLeft: 20 ,color:'#4877F8'}} >Xác nhận</Text>
                            </View>
                        </View>
                    </View>


                </View>

                <View style={{ flex: 10, backgroundColor: 'transparent', marginTop: 15 }}>

                    <SafeAreaView style={styles.container}>
                        <ScrollView style={styles.scrollView}>
                            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>

                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', width: '100%', height: 30, paddingLeft: '5%', paddingTop: '5%' }}>

                                    <View style={{ width: '100%', height: 30 }}>

                                        <Text style={styles.titleText}> Xác nhận thông tin</Text>
                                    </View>

                                </View>
                                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '15%', paddingLeft: '5%' }}>

                                    <View style={{ width: '100%', height: 20 }}>

                                        <Text style={{ fontSize: 13 }}> SỐ ĐIỆN THOẠI</Text>
                                    </View>
                                    <View style={{ width: '100%', height: 30, paddingRight: '10%' }}>
                                        <Input
                                            placeholder='Nhập số điện thoại của bạn'
                                        />

                                    </View>

                                </View>
                                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '15%', paddingLeft: '5%' }}>

                                    <View style={{ width: '100%', height: 20 }}>

                                        <Text style={{ fontSize: 13 }}> TIÊU ĐỀ BÀI ĐĂNG</Text>
                                    </View>
                                    <View style={{ width: '100%', height: 30, paddingRight: '10%' }}>
                                        <Input
                                            placeholder='Nhập thông tin tiêu đề'
                                        />

                                    </View>
                                    <View style={{ width: '100%', height: 30, paddingLeft: '78%',paddingTop:'5%'}}>
                                        <Text>26/60</Text>

                                    </View>

                                </View>



                                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '10%', paddingLeft: '5%' }}>

                                    <View style={{ width: '100%', height: 20 }}>

                                        <Text style={{ fontSize: 13 }}> NỘI DUNG MÔ TẢ</Text>
                                    </View>
                                    <View style={{ width: '100%', height: 30, paddingRight: '10%' }}>
                                        <Input
                                            placeholder='Nhập nội dung mô tả'
                                        />

                                    </View>

                                </View>

                                <View style={{flexDirection: 'row', justifyContent: 'flex-start',}}>

                                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '15%',paddingLeft: '5%' }}>

                                    <View style={{ width: '100%', height: 20  }}>

                                        <Text style={{ fontSize: 13 }}> THỜI GIAN MỞ CỬA</Text>
                                    </View>
                                    <View style={{ width: '80%', height: 30 }}>
                                        <Input
                                            placeholder='Giờ mở cửa'
                                        />

                                    </View>

                                </View>
                                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '15%',paddingRight: '10%' }}>

                                    <View style={{ width: '100%', height: 20 , paddingLeft: '5%'}}>

                                        <Text style={{ fontSize: 13 }}> THỜI GIAN ĐÓNG CỬA</Text>
                                    </View>
                                    <View style={{ width: '100%', height: 30  }}>
                                        <Input
                                            placeholder='Giờ đóng cửa'
                                        />

                                    </View>

                                </View>
                                </View>

                                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '15%', paddingLeft: '6%' }}>

                                    <View style={{ width: '100%', height: 100, paddingRight: '10%', paddingBottom: '10%' }}>
                                        <Button
                                           
                                           
                                            title="Đăng phòng"
                                            buttonStyle={{
                                                backgroundColor: '#4877F8',
                                                borderColor: '#4877F8',
                                                borderRadius: 10,

                                            }}
                                            containerStyle={{ borderColor: '#4877F8', }}
                                            titleStyle={{ color: '#ffff' }}

                                            type="solid"
                                        />
                                    </View>
                                </View>

                            </View>

                        </ScrollView>
                    </SafeAreaView>
                </View>




            </View>



        )
    }
}
const styles = StyleSheet.create({
    baseText: {
        fontSize: 20,
        color: '#4877F8',
        fontStyle: 'normal',

    },
    titleText: {
        fontSize: 20,
        color: '#383030',
        fontStyle: 'normal',

    },

    container: {
        flex: 1,

    },
    scrollView: {
        backgroundColor: 'transparent',
        height: '100%'
    },

});
