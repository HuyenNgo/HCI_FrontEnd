import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight, Alert, } from 'react-native'
import { Header, Button, Input } from 'react-native-elements'
import BaseComponent from "../../../base/components/BaseComponent";
import { RadioButton } from 'react-native-paper';
import { Dropdown } from 'react-native-material-dropdown';
import Modal from "react-native-modal";
export default class AccountPage extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: '      Tiếng việt',
            modalVisible: false,
        };

    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    render() {
        let data = [{
            value: 'English',
        }, {
            value: 'Tiếng Việt',
        }, {
            value: 'Tiếng Hoa',
        }];

        return (

            <View style={{ flexDirection: 'column', backgroundColor: '#F6F7F9', height: '100%' }}>

                <View style={{ flexDirection: 'row', paddingLeft: '5%', paddingTop: '10%', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 24, paddingTop: '5%', fontWeight: '600' }}>Huyền Ngô</Text>
                    <Image

                        source={{ uri: 'https://st.quantrimang.com/photos/image/2018/10/18/hinh-nen-co-ba-la-11.jpg' }}
                        style={{ width: 70, height: 70, borderRadius: 70 / 2, marginRight: 30 }}
                    />


                </View>

                <View style={styles.container}>


                    <View >
                        <Modal
                            animationType="fade"
                            transparent={true}
                            backdropColor="#B4B3DB"
                            backdropOpacity={0.8}
                            animationIn="zoomInDown"
                            animationOut="zoomOutUp"
                            animationInTiming={600}
                            animationOutTiming={600}
                            backdropTransitionInTiming={600}
                            backdropTransitionOutTiming={600}

                            style={{ backdropOpacit: 0.9, marginTop: 200, mariginLeft: 90, marginRight: 80, marginBottom: 200, backgroundColor: "#fff" }}
                            // presentationStyle="overFullScreen"
                            // modalPresentationStyle= 'overCurrentContext'
                            visible={this.state.modalVisible}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                            }}>
                            <View>

                                <RadioButton.Group
                                    onValueChange={value => this.setState({ value })}
                                    value={this.state.value}


                                >
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: '10%' }}>
                                        <View style={{ paddingTop: '2%' }}>
                                            <RadioButton value="        Tiếng Việt"
                                                color={'#4877F8'}
                                                selectedButtonColor={'#4877F8'}
                                            />
                                        </View>
                                        <View style={{ width: '80%' }}>
                                            <Input

                                                placeholder='Tiếng Việt'
                                                editable={false}
                                            />
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: 'row', paddingTop: '5%' }}>
                                        <View style={{ paddingTop: '2%' }}>
                                            <RadioButton value="      Tiếng Anh"
                                                color={'#4877F8'}
                                                selectedButtonColor={'#4877F8'} />
                                        </View>
                                        <View style={{ width: '80%' }}>
                                            <Input

                                                placeholder='Tiếng Anh'
                                                editable={false}
                                            />
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: 'row', paddingTop: '5%' }}>
                                        <View style={{ paddingTop: '2%' }}>
                                            <RadioButton value="    Tiếng trung"
                                                color={'#4877F8'}
                                                selectedButtonColor={'#4877F8'} />
                                        </View>
                                        <View style={{ width: '80%' }}>
                                            <Input

                                                placeholder='Tiếng Trung'
                                                editable={false}
                                            />
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: 'row', paddingTop: '5%' }}>
                                        <View style={{ paddingTop: '2%' }}>
                                            <RadioButton value="      Tiếng Nhật"
                                                color={'#4877F8'}
                                                selectedButtonColor={'#4877F8'}
                                            />
                                        </View>
                                        <View style={{ width: '80%' }}>
                                            <Input

                                                placeholder='Tiếng Nhật'
                                                editable={false}
                                            />
                                        </View>
                                    </View>

                                </RadioButton.Group>


                                <Button
                                    title="Outline button"
                                    type="solid"
                                    onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                    }}
                                />

                            </View>

                        </Modal>

                        <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
                            <View style={{ width: '100%', height: 20, paddingTop: '5%' }}>

                                <Text style={{ fontSize: 20, paddingLeft: '5%' }}> Chọn ngôn ngữ</Text>
                            </View>
                            <View style={{ width: '100%', height: 30 }}>
                                <TouchableHighlight
                                    onPress={() => {
                                        this.setModalVisible(true);
                                    }}>
                                    <Dropdown
                                        label={this.state.value}
                                        data={data}
                                        disabled={true}
                                    />
                                </TouchableHighlight>

                            </View>
                        </View>



                    </View>
                </View>
                <View style={styles.container2}>
                    <Text style={{ fontSize: 20 }}>Đăng suất</Text>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    modalView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#00BCD4",
        height: 300,
        width: '80%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        marginTop: 80,
        marginLeft: 40,
    },
    container:
    {
        // paddingLeft: '5%',
        //  paddingRight: '5%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        // borderBottomColor: '#DCDCDC',
        borderTopColor: '#DCDCDC',
        //  borderBottomWidth: 1,
        borderTopWidth: 1,
        marginTop: 30,
        width: "100%",
        height: 100
    },
    container2:
    {
        borderBottomColor: '#DCDCDC',
        borderBottomWidth: 1,
        paddingLeft: '6%',
        paddingTop: '5%',
        paddingBottom:'6%'
    }
})