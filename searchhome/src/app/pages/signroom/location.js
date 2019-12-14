import React, { Component } from 'react'
import { Header, Input, Button, Icon } from 'react-native-elements';
import { StyleSheet, Text, View, TextInput, ImageBackground, SafeAreaView, ScrollView, } from 'react-native'


import { Font } from "expo";
//config
import { Dropdown } from 'react-native-material-dropdown';
import Constants from 'expo-constants';
import cStyle from './../../../base/styles/styles'

export default class Location extends Component {
  render() {
    let data = [{
      value: 'Banana',
    }, {
      value: 'Mango',
    }, {
      value: 'Pear',
    }];
    return (


      <View style={{ flex: 1, backgroundColor: 'transparent' }}>
         {/* <View style={{ flex: 1, backgroundColor: 'transparent' }}>

          <Header
            containerStyle={{ backgroundColor: '#fff',borderBottomColor:'black' ,borderBottomWidth:1}}
           
            leftContainerStyle={{ marginTop: 20 }}
            centerComponent={{ text: 'Đăng phòng', style: { color: '#000', fontSize: 20, marginTop: 20 } }}
            rightComponent={{ text: 'Huỷ', style: { color: '#F21212', fontSize: 20, paddingRight: '10%', marginTop: 20 } }}
            
          />
        </View> */}

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'transparent', width: '100%', height: 100, padding: '5%',paddingTop:'10%' }}>


          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', width: 100, height: 50, backgroundColor: 'transparent', paddingLeft: '2%' }} >
            <View style={{ flex: 1, flexDirection: 'row', width: 100, height: 20, backgroundColor: 'transparent' }} >
              <View style={{ width: 10, height: 20, backgroundColor: 'transparent', }}>
              </View>

              <View style={{ width: 20, height: 20, backgroundColor: 'transparent', marginBottom: 20 }}>
                <ImageBackground source={require("./../../../..//assets/icons8-checkmark-25.png")}
                  style={{ width: '100%', height: '100%', justifyContent: 'center' }} />
              </View>
              <View style={{ width: 70, height: 20, backgroundColor: 'transparent' }} >
                <Text style={{ borderColor: '#d6d7da' }}>──────</Text>
              </View>
            </View>

            <View style={{ width: 100, height: 30, backgroundColor: 'transparent' }}>
              <Text style={{ borderColor: '#d6d7da' }}> Vị trí</Text>
            </View>

          </View>



          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', width: 100, height: 50, backgroundColor: 'transparent', }} >
            <View style={{ flex: 1, flexDirection: 'row', width: 100, height: 20, backgroundColor: 'transparent' }} >
              <View style={{ width: 20, height: 20, backgroundColor: 'transparent' }} >
                <Text style={{ borderColor: '#d6d7da' }}>──</Text>
              </View>

              <View style={{ width: 25, height: 25, backgroundColor: 'transparent', paddingBottom: '20%' }}>
                <ImageBackground source={require("./../../../..//assets/icons8-info-20.png")}
                  style={{ width: '100%', height: '100%', color: '#0F389F' }} />

              </View>
              <View style={{ width: 60, height: 20, backgroundColor: 'transparent' }} >
                <Text style={{ borderColor: '#d6d7da' }}>─────</Text>
              </View>
            </View>
            <View style={{ width: 100, height: 30, backgroundColor: 'transparent' }}>
              <Text>Thông tin</Text>
            </View>

          </View>

          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', width: 100, height: 50, backgroundColor: 'transparent', }} >
            <View style={{ flex: 1, flexDirection: 'row', width: 100, height: 20, backgroundColor: 'transparent' }} >
              <View style={{ width: 20, height: 20, backgroundColor: 'transparent' }} >
                <Text style={{ borderColor: '#d6d7da' }}>──</Text>
              </View>
              <View style={{ width: 25, height: 25, backgroundColor: 'transparent', paddingBottom: '20%' }}>
                <ImageBackground source={require("./../../../..//assets/icons8-full-image-25.png")}
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




        <View style={{ flex: 10, backgroundColor: 'transparent' }}>

          <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
              <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', width: '100%', height: 30, paddingLeft: '6%' }}>

                  <View style={{ width: '30%', height: 30 }}>

                    <Text style={styles.titleText}>Địa chỉ</Text>
                  </View>
                  <View style={{ width: 20, height: 20, maginTop: 5 }}>

                    <ImageBackground source={require("./../../../..//assets/icons8-place-marker-20.png")}
                      style={{ width: '100%', height: '100%', color: '#0F389F' }} />
                  </View>
                  <View style={{ width: '60%', height: 30, marginLeft: 10 }}>

                    <Text style={styles.titleText}>Sử dụng vị trí hiện tại</Text>
                  </View>

                </View>
                <View style={{  flexDirection: 'column', justifyContent: 'flex-start', paddingLeft: '5%' }}>

                  <View style={{ width: '100%', height: 20 , paddingTop: '10%'}}>

                    <Text style={{ fontSize: 13 }}> THÀNH PHỐ</Text>
                  </View>
                  <View style={{ width: '100%', height: 30, paddingRight: '10%', paddingLeft: '1%' }}>
                    <Dropdown
                      label='Hồ Chí Minh'
                      data={data}
                    />

                  </View>

                </View>
                <View style={{  flexDirection: 'column', justifyContent: 'flex-start', paddingLeft: '5%' }}>

                  <View style={{ width: '100%', height: 20 , paddingTop: '20%'}}>

                    <Text style={{ fontSize: 13 }}> QUẬN HUYỆN</Text>
                  </View>
                  <View style={{ width: '100%', height: 30, paddingRight: '10%' , paddingLeft: '1%'}}>
                    <Dropdown
                      label='Quận 2'
                      data={data}
                    />

                  </View>

                </View>



                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', paddingLeft: '5%' }}>

                  <View style={{ width: '100%', height: 20 , paddingTop: '20%'}}>

                    <Text style={{ fontSize: 13 }}> PHƯỜNG</Text>
                  </View>
                  <View style={{ width: '100%', height: 30, paddingRight: '10%', paddingLeft: '1%' }}>
                    <Dropdown
                      label='Phường 3'
                      data={data}
                    />

                  </View>

                </View>



                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start',  paddingTop: '20%',paddingLeft: '4%' }}>

                  <View style={{ width: '100%', height: 20 , paddingLeft: '1%'}}>

                    <Text style={{ fontSize: 13 }}> TÊN ĐƯỜNG</Text>
                  </View>
                  <View style={{ width: '100%', height: 30, paddingRight: '10%' }}>
                    <Input
                      placeholder='Ví dụ: Võ Văn Ngân'
                    />

                  </View>


                </View>
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '15%', paddingLeft: '4%' }}>

                  <View style={{ width: '100%', height: 20 , paddingLeft: '1%'}}>

                    <Text style={{ fontSize: 13 }}> SỐ NHÀ</Text>
                  </View>
                  <View style={{ width: '100%', height: 30, paddingRight: '10%' }}>
                    <Input
                      placeholder='Ví dụ: 224/44'
                    />

                  </View>


                </View>

                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '15%', paddingLeft: '6%' }}>

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
                      onPress={() => this.props.navigation.navigate('Information')}
                      type="outline"
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