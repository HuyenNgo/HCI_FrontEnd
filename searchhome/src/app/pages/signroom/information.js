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

export default class Information extends BaseComponent {


  state = {
    value: 'first',
    checked_TD:false,
    checked_TN:false,
    checked_Wifi:false,
    checked:false,
  };

  render() {
    return (

      <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'space-between', }}>
        {/* <View style={{ flex: 1, backgroundColor: 'transparent' }}>

          <Header
            containerStyle={{ backgroundColor: '#fff' }}
            leftComponent={{ icon: 'arrow-back', style: { color: '#000', fontSize: 20, marginTop: 20, } }}
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
                <Text > Vị trí</Text>
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
                  <Text style={{ borderColor: '#d6d7da' }}>─────</Text>
                </View>
              </View>
              <View style={{ width: 100, height: 30, backgroundColor: 'transparent' }}>
                <Text style={{color:'#4877F8'}}>Thông tin</Text>
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


        </View>

        <View style={{ flex: 10, backgroundColor: 'transparent', marginTop: 15 }}>

          <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>


              <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', width: '100%', height: 30, paddingLeft: '5%', paddingTop: '5%' }}>

                  <View style={{ width: '50%', height: 30 }}>

                    <Text style={styles.titleText}> Thông tin phòng</Text>
                  </View>

                </View>


                <View style={{ flex: 2, flexDirection: 'column', justifyContent: 'flex-start', paddingLeft: '6%', width: '100%' }}>

                  <View style={{ width: '100%', height: 20, paddingTop: '8%' }}>

                    <Text style={{ fontSize: 13 }}> LOẠI PHÒNG</Text>
                  </View>
                  <View style={{ width: '100%', flexDirection: 'column', justifyContent: 'flex-start' }}>


                    <RadioButton.Group
                      onValueChange={value => this.setState({ value })}
                      value={this.state.value}


                    >
                      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: '10%' }}>
                        <View style={{ paddingTop: '2%' }}>
                          <RadioButton value="Phòng cho thuê"
                            color={'#4877F8'}
                            selectedButtonColor={'#4877F8'}
                          />
                        </View>
                        <View style={{ width: '80%' }}>
                          <Input

                            placeholder='Phòng cho thuê'
                            editable={false}
                          />
                        </View>
                      </View>

                      <View style={{ flexDirection: 'row', paddingTop: '5%' }}>
                        <View style={{ paddingTop: '2%' }}>
                          <RadioButton value="Ký túc xá"
                            color={'#4877F8'}
                            selectedButtonColor={'#4877F8'} />
                        </View>
                        <View style={{ width: '80%' }}>
                          <Input

                            placeholder='Ký túc xá'
                            editable={false}
                          />
                        </View>
                      </View>

                      <View style={{ flexDirection: 'row', paddingTop: '5%' }}>
                        <View style={{ paddingTop: '2%' }}>
                          <RadioButton value="Căn hộ"
                            color={'#4877F8'}
                            selectedButtonColor={'#4877F8'} />
                        </View>
                        <View style={{ width: '80%' }}>
                          <Input

                            placeholder='Căn hộ'
                            editable={false}
                          />
                        </View>
                      </View>

                      <View style={{ flexDirection: 'row', paddingTop: '5%' }}>
                        <View style={{ paddingTop: '2%' }}>
                          <RadioButton value="Chia sẻ phòng"
                            color={'#4877F8'}
                            selectedButtonColor={'#4877F8'}
                          />
                        </View>
                        <View style={{ width: '80%' }}>
                          <Input

                            placeholder='Chia sẻ phòng'
                            editable={false}
                          />
                        </View>
                      </View>

                    </RadioButton.Group>
                  </View>

                </View>

                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '10%' ,paddingLeft:'6%'}}>

                  <View style={{ width: '100%', height: 20 }}>

                    <Text style={{ fontSize: 13 }}> SỐ LƯỢNG PHÒNG</Text>
                  </View>
                  <View style={{ width: '100%', height: 30, justifyContent: 'center', paddingRight: '8%' }}>
                    <Input
                      placeholder='Nhập số phòng bạn đang quản lý'
                      
                    />

                  </View>
                </View>


                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '10%', paddingLeft: '6%' }}>

                  <View style={{ width: '100%', height: 20 }}>

                    <Text style={{ fontSize: 13 }}> SỨC CHỨA</Text>
                  </View>
                  <View style={{ width: '100%', height: 30, justifyContent: 'center', paddingRight: '8%' }}>
                    <Input
                      placeholder='Số người/phòng'

                    />

                  </View>

                </View>

                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', paddingLeft: '6%' }}>

                  <View style={{ width: '100%', height: 20, paddingTop: '10%' }}>

                    <Text style={{ fontSize: 13 }}> GIỚI TÍNH</Text>
                  </View>
                  <View style={{ width: '100%', flexDirection: 'column', justifyContent: 'space-between' }}>

                    <RadioButton.Group
                      onValueChange={value => this.setState({ value })}
                      value={this.state.value}


                    >
                      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: '10%' }}>
                        <View style={{ paddingTop: '2%' }}>
                          <RadioButton value="Nam"
                            color={'#4877F8'}
                            selectedButtonColor={'#4877F8'}
                          />
                        </View>
                        <View style={{ width: '80%' }}>
                          <Input

                            placeholder='Nam'
                            editable={false}
                          />
                        </View>
                      </View>

                      <View style={{ flexDirection: 'row', paddingTop: '5%' }}>
                        <View style={{ paddingTop: '2%' }}>
                          <RadioButton value="Nữ"
                            color={'#4877F8'}
                            selectedButtonColor={'#4877F8'} />
                        </View>
                        <View style={{ width: '80%' }}>
                          <Input

                            placeholder='Nữ'
                            editable={false}
                          />
                        </View>
                      </View>

                      <View style={{ flexDirection: 'row', paddingTop: '5%' }}>
                        <View style={{ paddingTop: '2%' }}>
                          <RadioButton value="Tất cả"
                            color={'#4877F8'}
                            selectedButtonColor={'#4877F8'} />
                        </View>
                        <View style={{ width: '80%' }}>
                          <Input

                            placeholder='Tất cả'
                            editable={false}
                          />
                        </View>
                      </View>

                    </RadioButton.Group>



                  </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '10%', paddingLeft: '6%' }}>

                  <View style={{ width: '100%', height: 20 }}>

                    <Text style={{ fontSize: 13 }}> DIỆN TÍCH</Text>
                  </View>
                  <View style={{ width: '100%', height: 30, paddingRight: '8%' }}>
                    <Input
                      placeholder='Đơn vị diện tích sử dụng  m2'
                    />

                  </View>

                </View>



                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '10%' }}>

                  <View style={{ width: '100%', height: 20 , paddingLeft: '5%'}}>

                    <Text style={styles.titleText}> Chi phí</Text>
                  </View>

                </View>

                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', paddingLeft: '6%' }}>

                  <View style={{ width: '100%', height: 20 , paddingTop: '8%'}}>

                    <Text style={{ fontSize: 13 }}> GIÁ CHO THUÊ</Text>
                  </View>
                  <View style={{ width: '100%', height: 30, paddingRight: '8%',paddingTop: '5%' }}>
                    <Input
                      placeholder='Nhập giá bạn muốn cho thuê  đồng/phòng'
                    />
                  </View>

                </View>

                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', paddingLeft: '6%' }}>

                  <View style={{ width: '100%', height: 20 , paddingTop: '15%'}}>

                    <Text style={{ fontSize: 13 }}> ĐẶT CỌC</Text>
                  </View>
                  <View style={{ width: '100%', height: 30, paddingRight: '8%',paddingTop: '5%' }}>
                    <Input
                      placeholder='Nhập số tháng hoặc số tiền'
                    />
                  </View>

                </View>

                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', paddingLeft: '6%' , paddingTop: '10%'}}>

                  <View style={{ width: '100%', height: 30 ,paddingTop: '5%'}}>

                    <Text style={{ fontSize: 13 }}> TIỀN ĐIỆN</Text>
                  </View>
                  <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', width: '100%', height: 30 }}>

                    <View style={{ width: '60%', height: 30 }}>
                      <Input
                        placeholder='Nhập số tiền    đ/số' />
                    </View>

                    <View style={{ width: '40%', height: 30,paddingTop:'5%' }}>

                      <CheckBox
                        title='MIỄN PHÍ'
                        containerStyle={cStyles.containerCheckbox}
                        textStyle={{ fontSize: 13 }}
                        checked={this.state.checked_TD}
                        onPress={() => this.setState({checked_TD: !this.state.checked_TD})}
                        textStyle={cStyles.textCheckbox}
                        
                      />
                    </View>
                  </View>
                </View>


                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', paddingLeft: '6%' }}>

                  <View style={{ width: '100%', height: 30,paddingTop: '10%' }}>

                    <Text style={{ fontSize: 13 }}> TIỀN NƯỚC</Text>
                  </View>
                  <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', width: '100%', height: 30,paddingTop:'5%' }}>

                    <View style={{ width: '60%', height: 30 }}>
                      <Input
                        placeholder='Nhập số tiền    đ/số' />
                    </View>

                    <View style={{ width: '40%', height: 30,paddingTop:'5%'  }}>

                      <CheckBox
                        title='MIỄN PHÍ'
                        containerStyle={cStyles.containerCheckbox}
                        textStyle={{ fontSize: 13 }}
                        checked={this.state.checked_TN}
                        onPress={() => this.setState({checked_TN: !this.state.checked_TN})}
                        textStyle={cStyles.textCheckbox}
                        
                      />
                    </View>
                  </View>
                </View>


                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', paddingLeft: '6%' }}>

                  <View style={{ width: '100%', height: 30, paddingTop: '15%' }}>

                    <Text style={{ fontSize: 13 }}> INTERNET/TRUYỀN HÌNH CÁP</Text>
                  </View>
                  <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', width: '100%', height: 30 ,paddingTop:'5%'}}>

                    <View style={{ width: '60%', height: 30 }}>
                      <Input
                        placeholder='Nhập số tiền  đ/tháng' />
                    </View>

                    <View style={{ width: '40%', height: 30,paddingTop:'5%'  }}>

                      <CheckBox
                        title='MIỄN PHÍ'
                        containerStyle={cStyles.containerCheckbox}
                       checked={this.state.checked_Wifi}
                       onPress={() => this.setState({checked_Wifi: !this.state.checked_Wifi})}
                       textStyle={cStyles.textCheckbox}
                      />
                    </View>
                  </View>
                </View>


                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', width: '100%', paddingLeft:'1%',paddingTop: '15%', height: 30 }}>

                  <CheckBox
                    title='Có chỗ để xe'
                    containerStyle={{ backgroundColor: 'transparent', borderStyle: 'dashed', borderColor: 'transparent' }}
                    textStyle={{
                      fontSize: 14,
                    }}
                    checked={this.state.checked}
                    onPress={()=>this.setState({checked:!this.state.checked})}
                  />

                </View>



                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '20%', paddingLeft: '6%' }}>

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
                      onPress={() => this.props.navigation.navigate('Utilities')}
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
