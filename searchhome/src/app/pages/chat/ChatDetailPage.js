import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TextInput, KeyboardAvoidingView } from 'react-native'
import { Header, Button, Icon, Input } from 'react-native-elements'

export default class ChatDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "#fff",
        };

    }
    render() {
        return (
            <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }} behavior="padding" enabled>

                <View style={{ flex: 1 }}>
                    <Header
                        leftComponent={
                            <Icon
                                name="keyboard-backspace"
                                type="material"
                                color="#000"
                                onPress={() => this.props.navigation.navigate('Home')}
                            >


                            </Icon>
                        }
                        containerStyle={{ backgroundColor: '#fff', borderBottomColor: '#F6F7F9', borderBottomWidth: 1 }}

                        centerComponent={{ text: 'Nessie Nguyen', style: { color: '#000', fontSize: 20 } }}
                    />
                </View>
                <View style={{ flex: 6, flexDirection: 'column', backgroundColor: '#F6F7F9', justifyContent: 'flex-end' }}>

                    <Text style={{ paddingLeft: '45%' }}>04-12-2019</Text>
                    <View style={{ flexDirection: 'row', paddingLeft: '5%', paddingTop: '3%' }}>

                        <Image
                            source={{
                                uri: 'https://st.quantrimang.com/photos/image/2018/10/18/hinh-nen-co-ba-la-11.jpg'
                            }}
                            style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                        //onPress={() => this.props.navigation.navigate('DetailRoomate')}
                        />
                        <View style={{ backgroundColor: '#fff', marginLeft: 5, marginRight: 20, width: '60%' }}>
                            <Text style={{ width: '100%', paddingLeft: "3%", paddingTop: '5%', lineHeight: 20, }}>Hi, bạn đang tìm phòng ở ghép đúng không vậy?</Text>
                        </View>
                    </View>

                    <Text style={{ width: '70%', paddingLeft: '25%', marginBottom: 15 }}>14:12</Text>

                    <View style={styles.baseStyle}>
                       
                        <Text style={{ lineHeight: 20,color:'#fff' }}>Đúng rồi bạn ơi!</Text>
                        
                    </View>

                    <Text style={{ width: 50,paddingTop:'3%', marginLeft: '70%', marginBottom: 15 }}>14:12  Đã xem</Text>
                </View>

                <View style={{  height:'10%',flexDirection: 'row', paddingTop: '5%', borderTopColor: '#DADAE1', borderTopWidth: 1, justifyContent: 'space-between' }}>
                    <TextInput
                        placeholder='Nhập tin nhắn của bạn'
                        onChangeText={(text) => this.setState({ status: '#4877F8' })}
                        //disabledInputStyle={true}
                        style={{ fontSize: 15, paddingLeft: '5%' }}
                    />
                    <Icon
                        containerStyle={{ paddingLeft: '15%' }}
                        name='send'
                        type='material'
                        color={this.state.status}
                    //hiden={this.state.status}
                    />
                </View>

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    baseStyle: {
        flexDirection:'row',
         backgroundColor: '#4877F8',
         marginLeft:200,
         paddingRight:'5%', 
         marginRight: 5,
         borderColor:'#4877F8',
         justifyContent:'flex-end',
          borderRadius:5,
         borderWidth:1,
         paddingTop:'3%',
         height:'10%'
  
    },
})