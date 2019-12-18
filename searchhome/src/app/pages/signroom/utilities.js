import React, { Component } from 'react'
import BaseComponent from "../../../base/components/BaseComponent";
import { Header, Input, Button, Icon, CheckBox } from 'react-native-elements';
import { StyleSheet, Text, View, TextInput, ImageBackground, SafeAreaView, ScrollView, } from 'react-native'
import { Font } from "expo";
import { RadioButton } from 'react-native-paper';
import cStyles from '../../../base/styles/styles'
import * as _d from './../../common/dataUtilities'
import UtilitiesItem from './itemUtilities'
import { Container } from 'native-base'
import { FlatList, ButtonLoadMore } from './../../../base/controls'

export default class Utilities extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            status: 'first',
            search: '',
            number: 0,
            dateValue: new Date(),
            mockData: {
                items: [],
                currentPage: 1,
                pageSize: 3,
                pageCount: 2,

            },


        }
    }

    componentDidMount() {
        this.onRefresh()

    }
    onRefresh = () => {
        if (true) {
            // this.props.onFetchDataAsync(constants.PAGE_INDEX, constants.PAGE_SIZE, this.props.user.employeeId, true)
            this.setState({ isLoading: true })
            this.setState({
                ...this.state,
                mockData: {
                    items: [..._d.data],
                    currentPage: 1,
                    pageCount: 2,
                    pageSize: 8,
                },


            })
        }
    }
    renderItem = ({ item }) => {

        return (


            <UtilitiesItem item={item} />


        )
    }

    render() {
        const { number, dateValue, mockData } = this.state
        return (

            <Container >
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

                <View style={{ backgroundColor: 'transparent', paddingBottom: '5%', marginBottom: 10 }}>

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
                                <Text style={{ color: '#4877F8' }}>Hình ảnh</Text>
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



                <SafeAreaView style={styles.container}>
                    <ScrollView style={styles.scrollView}>



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
                        </View>
                        <View style={{ width: '100%', height: 80, paddingTop: '5%', paddingLeft: '10%', marginLeft: 20 }}>
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
                        <View style={{ width: '100%', height: 20, paddingLeft: '6%', paddingTop: '5%' }}>

                            <Text style={{ fontSize: 13 }}> TIỆN ÍCH</Text>
                        </View>

                        <FlatList
                            numColumns={2}
                            data={mockData.items}
                            renderItem={this.renderItem}
                        />

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
                    </ScrollView>
                </SafeAreaView>

            </Container>



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

    },

});
