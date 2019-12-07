import React, { Component } from 'react'
import { StyleSheet, TextInput, ImageBackground, Text, View, Image } from 'react-native'
import BaseComponent from "../../../base/components/BaseComponent";
import { Header, Input, Button, Icon, CheckBox } from 'react-native-elements';
import styles from './../../../base/styles/search'
export default class SearchPage extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      style: styles.containerStyle
    };

  }
  render() {
    return (
      <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>

        <Header
          containerStyle={{ backgroundColor: '#fff' }}
          centerComponent={{ text: 'Tìm nhà gần đây', style: { color: '#000', fontSize: 20, marginTop: 20 } }}
        />

        <View style={this.state.style} >
          {/* <Image
            //We are showing the Image from online
            source={{uri:'https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_username.png',}}

            //You can also show the image from you project directory like below
           // source={require("./../../../../assets/icons8-marker-25")}

            //Image Style
            style={styles.ImageStyle}
          /> */}
          <ImageBackground source={require("./../../../..//assets/icons8-marker-25.png")}
            style={styles.ImageStyle} />
          <TextInput
            style={{ flex: 1 }}
            placeholder="Nhập tên trường, địa điểm làm việc"
            underlineColorAndroid="transparent"
            onChangeText={(text) => this.setState({ style: styles.containerStyle1 })}
          />
        </View>

        <View style={styles.background}>

          <ImageBackground source={require("./../../../..//assets/imagebackground.png")}
            style={styles.ImageStyle2} />
          <Text style={styles.text1}>Ohana tìm chỗ trọ thuận tiện nhất </Text>
          <Text style={styles.text1}>cho bạn bằng cách nhập địa chỉ nơi </Text>
          <Text style={styles.text1}>làm việc và học tập</Text>

          <View style={styles.styleView}>

            <View style={{ width: 20, height: 20, maginTop: 5 }}>

              <ImageBackground source={require("./../../../..//assets/icons8-place-marker-20.png")}
                style={{ width: '100%', height: '100%', color: '#0F389F' }} />
            </View>
            <View >

              <Text style={styles.titleText}>Sử dụng vị trí hiện tại</Text>
            </View>
          </View>
          <View style={styles.buttonstyle1}>
            <Button


              title="Xác nhận"
              buttonStyle={styles.buttonstyle}
            //  containerStyle={styles.buttonstyle1}
              titleStyle={{ color: '#ffff' }}
              onPress={() => this.props.navigation.navigate('SearchResult')}
              type="solid"
            />
          </View>
        </View>


      </View>
    )
  }
}

