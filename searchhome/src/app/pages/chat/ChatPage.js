import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Header, Button, Icon } from 'react-native-elements'
import { Thumbnail } from 'native-base'
export default class ChatPage extends Component {
  render() {
    return (
      <View >
        <Header
          containerStyle={{ backgroundColor: '#fff', borderBottomColor: '#F6F7F9', borderBottomWidth: 1 }}
          centerComponent={{ text: 'Nhắn tin', style: { color: '#000', fontSize: 20 } }}
        />
        <View style={{ flexDirection: 'column', backgroundColor: '#F6F7F9', height: '86%', justifyContent: 'space-between' }}>


          <View style={{ flexDirection: 'row', paddingLeft: '5%', paddingTop: '3%', height: 100 }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')}>
              <Image
                source={{
                  uri: 'https://st.quantrimang.com/photos/image/2018/10/18/hinh-nen-co-ba-la-11.jpg'
                }}
                style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                // 
                
              />
            </TouchableOpacity>
            <View style={{ flexDirection: 'column', backgroundColor: 'F6F7F9', paddingLeft: '5%', }}>
              <View style={{ flexDirection: 'row', width: '100%', height: '40%' }}>
                <Text style={{ width: '40%' }}>Nessie Nguyen</Text>
                <Text style={{ width: '70%', paddingLeft: '10%' }}>04-12 12:41</Text>
              </View>
              <Text style={{ width: '70%' }}>Hi, bạn đang tìm phòng ở ghép đúng không vậy?</Text>

            </View>
          </View>

          <Button
            icon={
              <Icon

                name='chat'
                type='material'
                color='#fff'
                size={18}
                iconStyle={{ marginRight: 5 }}
              />

            }
            iconLeft
            containerStyle={{ paddingBottom: '5%' }}
            buttonStyle={{
              backgroundColor: '#4877F8',
              borderColor: '#4877F8',
              borderRadius: 10,
              width: 200,
              height: 40,
              borderWidth: 1,
              borderStyle: 'solid',
              marginLeft: 80

            }}
            titleStyle={{ color: '#fff' }}
            title="Nhắn tin với Ohana"></Button>
        </View>



      </View>
    );
  }
}
