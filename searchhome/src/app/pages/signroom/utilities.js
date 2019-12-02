import React, { Component } from 'react'
import BaseComponent from "../../../base/components/BaseComponent";
import { Header, Input, Button, Icon, CheckBox } from 'react-native-elements';
import { StyleSheet, Text, View, TextInput, ImageBackground, SafeAreaView, ScrollView, } from 'react-native'
import { Font } from "expo";
import { RadioButton } from 'react-native-paper';
import cStyles from '../../../base/styles/styles'


var radio_props = [
    { label: 'Phòng cho thuê', value: 0 },
    { label: 'Ký túc xá', value: 1 },
    { label: 'Căn hộ', value: 2 },
    { label: 'Chia sẻ phòng', value: 3 }
];
var radio_gioitinh = [
    { label: 'Nam', value: 0 },
    { label: 'Nữ', value: 1 },
    { label: 'Tất cả', value: 2 },

];

export default class Utilities extends BaseComponent {


    state = {
        value: 'first',
        checked_TD: false,
        checked_TN: false,
        checked_Wifi: false,
        checked: false,
    };

    render() {
        return (

            <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'space-between', }}>
                {/* <View style={{ flex: 1, backgroundColor: 'transparent' }}>

                    <Header
                        containerStyle={{ backgroundColor: '#fff' }}
                        leftComponent={

                            <Icon

                                name='arrow-back'
                                type='material'
                                color='#000'
                                onPress={() => this.props.navigation.navigate('Information')} 
                            />
                        }
                        leftContainerStyle={{ marginTop: 20 }}
                        centerComponent={{ text: 'Đăng phòng', style: { color: '#000', fontSize: 20, marginTop: 20 } }}
                        rightComponent={{ text: 'Huỷ', style: { color: '#F21212', fontSize: 20, paddingRight: '10%', marginTop: 20 } }}

                    />
                </View> */}

                <View style={{ flex: 1, backgroundColor: 'transparent'}}>

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
                                <Text style={{ color: '#0F389F' }}> Vị trí</Text>
                            </View>

                        </View>



                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', width: 100, height: 50, backgroundColor: 'transparent', }} >
                            <View style={{ flex: 1, flexDirection: 'row', width: 100, height: 20, backgroundColor: 'transparent' }} >
                                <View style={{ width: 20, height: 20, backgroundColor: 'transparent' }} >
                                    <Text style={{ color: 'rgba(18, 81, 242, 0.8)' }}>──</Text>
                                </View>

                                <View style={{ width: 25, height: 25, backgroundColor: 'transparent', paddingBottom: '20%' }}>
                                    <ImageBackground source={require("./../../../..//assets/icons8-info-25-blue.png")}
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
                            <View style={{ flex: 1, flexDirection: 'row', width: 100, height: 20, backgroundColor: 'transparent' }} >
                                <View style={{ width: 20, height: 20, backgroundColor: 'transparent' }} >
                                    <Text style={{ color: 'rgba(18, 81, 242, 0.8)' }}>──</Text>
                                </View>
                                <View style={{ width: 25, height: 25, backgroundColor: 'transparent', paddingBottom: '20%' }}>
                                    <ImageBackground source={require("./../../../..//assets/icons8-full-image-25_blue.png")}
                                        style={{ width: '100%', height: '100%', justifyContent: 'center' }} />
                                </View>
                                <View style={{ width: 65, height: 20, backgroundColor: 'transparent' }} >
                                    <Text style={{ borderColor: '#d6d7da' }}>──────</Text>
                                </View>
                            </View>
                            <View style={{ width: 100, height: 30, backgroundColor: 'transparent', marginLeft: 10 }}>
                                <Text>Hình ảnh</Text>
                            </View>

                        </View>

                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', width: 150, height: 50, backgroundColor: 'transparent' }} >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: 40, height: 20, backgroundColor: 'transparent' }} >
                                    <Text style={{ borderColor: '#d6d7da' }}>────</Text>
                                </View>
                                <View style={{ width: 23, height: 20, backgroundColor: 'transparent', }}>
                                    <Icon name='home' style={{ fontSize: 20, color: 'rgba(56, 48, 48, 0.69)', width: '100%', height: '100%', justifyContent: 'center' }} />
                                </View>
                                <View style={{ width: 60, height: 20, backgroundColor: 'transparent' }} >

                                </View>
                            </View>
                            <View style={{ width: 100, height: 30, backgroundColor: 'transparent', }}>
                                <Text style={{ marginLeft: 20 }}>Xác nhận</Text>
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

                                        <Text style={styles.titleText}> Thông tin hình ảnh và tiện ích</Text>
                                    </View>

                                </View>


                                <View style={{ flexDirection: 'column', justifyContent: 'flex-start', paddingLeft: '6%', width: '100%' }}>

                                    <View style={{ width: '100%', height: 20, paddingTop: '8%' }}>

                                        <Text style={{ fontSize: 13 }}> HÌNH ẢNH</Text>
                                    </View>
                                    <View style={cStyles.styleview}>
                                        <View style={{ width: 50, height: 50 }}>
                                            <ImageBackground source={require("./../../../..//assets/icons8-add-image-50.png")}
                                                style={{ width: '100%', height: '100%', justifyContent: 'center' }} />
                                        </View>
                                        <View style={{ width: '50%' }}>
                                            <Text>      Bấm vào để đăng   hình ảnh từ thư viện nhé</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '100%', height: 100, paddingTop: '10%', paddingLeft: '10%' }}>
                                        <Button
                                            icon={
                                                <Icon

                                                    name='camera-alt'
                                                    type='material'
                                                    color='#4877F8'

                                                    iconStyle={{ marginRight: 10 }}
                                                />

                                            }
                                            iconLeft
                                            title="Chụp hình"
                                            buttonStyle={{
                                                backgroundColor: '#FFFFFF',
                                                borderColor: '#4877F8',
                                                borderRadius: 10,

                                            }}
                                            containerStyle={{ borderColor: '#4877F8', width: 250 }}
                                            titleStyle={{ color: '#4877F8' }}

                                            type="outline"
                                        />
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'column', justifyContent: 'flex-start', width: '100%' }}>

                                    <View style={{ width: '100%', height: 20, paddingLeft: '6%', paddingTop: '5%' }}>

                                        <Text style={{ fontSize: 13 }}> TIỆN ÍCH</Text>
                                    </View>

                                    <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }} >
                                        <View style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            paddingTop: '10%',
                                        }}>
                                            <View style={{ width: '30%', height: 50, alignItems: 'center', marginLeft: 45 }}>
                                                <Button
                                                    icon={
                                                        <Icon

                                                            name='network-wifi'
                                                            type='material'
                                                            color='#4877F8'

                                                            iconStyle={cStyles.iconStyle2}
                                                        />

                                                    }
                                                    iconLeft
                                                    title="Internet"
                                                    buttonStyle={{
                                                        backgroundColor: '#FFFFFF',
                                                        borderColor: '#4877F8',
                                                        borderRadius: 10,

                                                    }}
                                                    containerStyle={{ borderColor: '#4877F8', width: 150 }}
                                                    titleStyle={{ color: '#4877F8' }}

                                                    type="outline"
                                                />
                                            </View>

                                            <View style={{ width: '30%', height: 50, alignItems: 'center', paddingBottom: '10%', marginLeft: 30, marginRight: 40 }}>
                                                <Button
                                                    icon={
                                                        <Icon

                                                            name='motorcycle'
                                                            type='material'
                                                            color='#4877F8'

                                                            iconStyle={cStyles.iconStyle1}
                                                        />

                                                    }
                                                    iconLeft
                                                    title="Chỗ để xe"
                                                    buttonStyle={{
                                                        backgroundColor: '#FFFFFF',
                                                        borderColor: '#4877F8',
                                                        borderRadius: 10,

                                                    }}
                                                    containerStyle={{ borderColor: '#4877F8', width: 150 }}
                                                    titleStyle={{ color: '#4877F8' }}

                                                    type="outline"
                                                />
                                            </View>

                                        </View>

                                        <View style={cStyles.stylerow}>
                                            <View style={{ width: '30%', height: 50, alignItems: 'center', marginLeft: 45 }}>
                                                <Button
                                                    icon={
                                                        <Icon

                                                            name='vpn-key'
                                                            type='material'
                                                            color='#C8C8C8'

                                                            iconStyle={cStyles.iconStyle1}
                                                        />

                                                    }
                                                    iconLeft
                                                    title="Chung chủ"
                                                    buttonStyle={cStyles.button1}
                                                    containerStyle={{ borderColor: '#F5F5F5', width: 150 }}
                                                    titleStyle={cStyles.titleStyle1}

                                                    type="clear"
                                                />
                                            </View>

                                            <View style={{ width: '30%', height: 50, alignItems: 'center', paddingBottom: '10%', marginLeft: 30, marginRight: 40 }}>
                                                <Button
                                                    icon={
                                                        <Icon

                                                            name='wc'
                                                            type='material'
                                                            color='#C8C8C8'

                                                            iconStyle={cStyles.iconStyle2}
                                                        />

                                                    }
                                                    iconLeft
                                                    title="WC riêng"
                                                    buttonStyle={cStyles.button1}
                                                    containerStyle={{ borderColor: '#4877F8', width: 150 }}
                                                    titleStyle={cStyles.titleStyle1}

                                                    type="clear"
                                                />
                                            </View>

                                        </View>
                                        <View style={cStyles.stylerow}>
                                            <View style={{ width: '30%', height: 50, alignItems: 'center', marginLeft: 45 }}>
                                                <Button
                                                    icon={
                                                        <Icon

                                                            name='room-service'
                                                            type='material'
                                                            color='#C8C8C8'

                                                            iconStyle={cStyles.iconStyle2}
                                                        />

                                                    }
                                                    iconLeft
                                                    title="Có gác"
                                                    buttonStyle={cStyles.button1}
                                                    containerStyle={{ borderColor: '#4877F8', width: 150 }}
                                                    titleStyle={cStyles.titleStyle1}

                                                    type="clear"
                                                />
                                            </View>

                                            <View style={{ width: '30%', height: 50, alignItems: 'center', paddingBottom: '10%', marginLeft: 30, marginRight: 40 }}>
                                                <Button
                                                    icon={
                                                        <Icon

                                                            name='security'
                                                            type='material'
                                                            color='#C8C8C8'

                                                            iconStyle={cStyles.iconStyle2}
                                                        />

                                                    }
                                                    iconLeft
                                                    title="An ninh"
                                                    buttonStyle={cStyles.button1}
                                                    containerStyle={{ borderColor: '#4877F8', width: 150 }}
                                                    titleStyle={cStyles.titleStyle1}

                                                    type="clear"
                                                />
                                            </View>

                                        </View>
                                        <View style={cStyles.stylerow}>
                                            <View style={{ width: '30%', height: 50, alignItems: 'center', marginLeft: 45 }}>
                                                <Button
                                                    icon={
                                                        <Icon

                                                            name='airplay'
                                                            type='material'
                                                            color='#C8C8C8'

                                                            iconStyle={cStyles.iconStyle1}
                                                        />

                                                    }
                                                    iconLeft
                                                    title="Máy lạnh"
                                                    buttonStyle={cStyles.button1}
                                                    containerStyle={{ borderColor: '#4877F8', width: 150 }}
                                                    titleStyle={cStyles.titleStyle1}

                                                    type="clear"
                                                />
                                            </View>

                                            <View style={{ width: '30%', height: 50, alignItems: 'center', paddingBottom: '10%', marginLeft: 30, marginRight: 40 }}>
                                                <Button
                                                    icon={
                                                        <Icon

                                                            name='pets'
                                                            type='material'
                                                            color='#C8C8C8'

                                                            iconStyle={cStyles.iconStyle1}
                                                        />

                                                    }
                                                    iconLeft
                                                    title="Thú cưng"
                                                    buttonStyle={cStyles.button1}
                                                    containerStyle={{ borderColor: '#4877F8', width: 150 }}
                                                    titleStyle={cStyles.titleStyle1}

                                                    type="clear"
                                                />
                                            </View>

                                        </View>
                                        <View style={cStyles.stylerow}>
                                            <View style={{ width: '30%', height: 50, alignItems: 'center', marginLeft: 45 }}>
                                                <Button
                                                    icon={
                                                        <Icon

                                                            name='hotel'
                                                            type='material'
                                                            color='#C8C8C8'

                                                            iconStyle={{ marginRight: 10 }}
                                                        />

                                                    }
                                                    iconLeft
                                                    title="Có giường"
                                                    buttonStyle={cStyles.button1}
                                                    containerStyle={{ borderColor: '#4877F8', width: 150 }}
                                                    titleStyle={cStyles.titleStyle1}

                                                    type="clear"
                                                />
                                            </View>

                                            <View style={{ width: '30%', height: 50, alignItems: 'center', marginLeft: 30, marginRight: 40 }}>
                                                <Button
                                                    icon={
                                                        <Icon

                                                            name='kitchen'
                                                            type='material'
                                                            color='#C8C8C8'

                                                            iconStyle={cStyles.iconStyle2}
                                                        />

                                                    }
                                                    iconLeft
                                                    title="Tủ lạnh"
                                                    buttonStyle={cStyles.button1}
                                                    containerStyle={{ borderColor: '#4877F8', width: 150 }}
                                                    titleStyle={cStyles.titleStyle1}

                                                    type="clear"
                                                />
                                            </View>

                                        </View>
                                    </View>

                                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '10%', paddingLeft: '6%' }}>

                                        <View style={{ width: '100%', height: 100, paddingRight: '10%', paddingBottom: '10%' }}>
                                            <Button
                                                icon={
                                                    <Icon

                                                        name='arrow-forward'
                                                        type='material'
                                                        color='#4877F8'
                                                        iconStyle={{ marginLeft: 60 }}
                                                    />

                                                }
                                                iconRight
                                                title="Tiếp theo"
                                                buttonStyle={{
                                                    backgroundColor: '#FFFFFF',
                                                    borderColor: '#4877F8',
                                                    borderRadius: 10,

                                                }}
                                                containerStyle={{ borderColor: '#4877F8', }}
                                                titleStyle={{ color: '#4877F8' }}

                                                type="outline"
                                                onPress={() => this.props.navigation.navigate('Confirm')}
                                            />
                                        </View>
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
