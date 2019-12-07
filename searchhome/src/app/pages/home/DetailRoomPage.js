import React, { Component } from 'react'

import BaseComponent from "./../../../base/components/BaseComponent";
import ButtonNavigation from './../../main/ButtonNavigation'
import { Header, Input, Button, Icon, CheckBox } from 'react-native-elements';
import { SearchBar } from 'react-native-elements';
import colors from '../../../base/config/colors';
import { List, ListItem } from "react-native-elements"
import { StyleSheet, Text, View, TextInput, ImageBackground, SafeAreaView, ScrollView, Image } from 'react-native'
import { Container, Thumbnail, Card, CardItem, Body, Left } from 'native-base';
import RoomItem from './roomItem'
import cStyle from './../../../base/styles/homeStyle'
import * as _d from './../../common/data'
import { FlatList, ButtonLoadMore } from './../../../base/controls';
import metrics from './../../../base/config/metrics'

export default class DetailRoomPage extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      number: 0,
      dateValue: new Date(),
      mockData: {
        items: [],
        currentPage: 1,
        pageSize: 3,
        pageCount: 2,

      },
      isLoading: false

    }
  }

  componentDidMount() {
    this.onRefresh()
  }
  updateSearch = search => {
    this.setState({ search });
  };


  onLoadMore = (isAbleToLoadMore) => {
    if (isAbleToLoadMore) {
      this.setState({ isLoading: true })
      this.setState({
        ...this.state,
        mockData: {
          items: [...this.state.mockData.items,
          ..._d.data
          ],
          currentPage: 2,
          pageCount: 2,
          pageSize: 8,
        },
        isLoading: false,
        numColumns: 2

      })
    }

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
        isLoading: false

      })
    }
  }
  renderItem = ({ item }) => {

    return (<RoomItem item={item} />)
  }

  render() {
    const { search } = this.state;
    const numColumns = 2
    const { number, dateValue, mockData, isLoading } = this.state
    const isLoadMore = this.canLoadMore(mockData)
    return (
      <Container>
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>

            <View style={{ flex: 10, flexDirection: 'column', backgroundColor: '#F6F7F9', marginBottom: 20 }}>

              <View style={{ backgroundColor: '#FFFFFF', marginBottom: 8 }}>
                <View style={{ flexDirection: 'row', paddingTop: '10%' }}>
                  <Image
                    //We are showing the Image from online
                    source={{ uri: 'https://tromoi.com/uploads/guest/o_1dqqhmtk81htk1n2id2m11c4a4sc.jpg', }}

                    //You can also show the image from you project directory like below
                    // source={require("./../../../../assets/icons8-marker-25")}

                    //Image Style
                    style={cStyle.ImageLeft}
                  />
                  <Image
                    //We are showing the Image from online
                    source={{ uri: 'https://tromoi.com/uploads/guest/o_1dqqhmtk8qre1gk3l2nkfnkf4b.jpg', }}

                    //You can also show the image from you project directory like below
                    // source={require("./../../../../assets/icons8-marker-25")}

                    //Image Style
                    style={cStyle.ImageRight}
                  />

                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    //We are showing the Image from online
                    source={{ uri: 'https://tromoi.com/uploads/guest/o_1dqqhmtk81htk1n2id2m11c4a4sc.jpg', }}

                    //You can also show the image from you project directory like below
                    // source={require("./../../../../assets/icons8-marker-25")}

                    //Image Style
                    style={cStyle.ImageLeft2}
                  />
                  <Image
                    //We are showing the Image from online
                    source={{ uri: 'https://tromoi.com/uploads/guest/o_1dqqhmtk81htk1n2id2m11c4a4sc.jpg', }}

                    //You can also show the image from you project directory like below
                    // source={require("./../../../../assets/icons8-marker-25")}

                    //Image Style
                    style={cStyle.ImageCenter}
                  />
                  <View style={cStyle.ImageRight2}>
                    <ImageBackground
                      //We are showing the Image from online
                      source={{ uri: 'https://cdn.luxstay.com/rooms/13489/medium/1531120224_AUBE0293-min.jpg', }}

                      //You can also show the image from you project directory like below
                      // source={require("./../../../../assets/icons8-marker-25")}

                      //Image Style
                      style={{ width: '100%', height: '100%' }}
                    >
                      <Text style={{ color: '#000', padding: '40%', fontSize: 20, fontWeight: 'bold' }}>+4</Text>
                    </ImageBackground>

                  </View>
                </View>

                <View style={{ paddingTop: '5%', paddingLeft: '5%' }}>
                  <Text>PHÒNG CHO THUÊ </Text>

                </View>
                <View style={{ paddingTop: '5%', paddingLeft: '5%' }}>
                  <Text style={{ fontSize: 24 }}>Phòng cho thuê Kỳ Đồng,    Quận 3</Text>

                </View>

                <View style={cStyle.styleview}>

                  <View style={{ flexDirection: 'column', width: '30%' }}>
                    <Text style={{ paddingLeft: '10%' }}> GIÁ</Text>
                    <Text style={cStyle.text1} > 5tr/phòng</Text>

                  </View>
                  <View style={{ flexDirection: 'column', width: '24%' }}>
                    <Text>CÓ SẴN</Text>
                    <Text style={cStyle.text1}>Có</Text>

                  </View>
                  <View style={{ flexDirection: 'column', width: '25%' }}>
                    <Text>DIỆN TÍCH</Text>
                    <Text style={cStyle.text1}>24m2</Text>

                  </View>
                  <View style={{ flexDirection: 'column', width: '25%' }}>
                    <Text>ĐẶT CỌC</Text>
                    <Text style={cStyle.text1}> 5tr</Text>

                  </View>

                </View>

                <View style={cStyle.styleview2}></View>


                <View style={cStyle.styleview3}>
                  <View style={{ flexDirection: 'column', width: '25%', paddingLeft: '5%' }}>
                    <Image

                      source={require("./../../../../assets/icons8-light-on-203.png")}

                      style={cStyle.image1}
                    />
                    <Text style={cStyle.text2}> 3k</Text>

                  </View>

                  <View style={{ flexDirection: 'column', width: '25%' }}>
                    <Image

                      source={require("./../../../../assets/icons8-water-20.png")}

                      style={cStyle.image1}
                    />
                    <Text style={cStyle.text3}>100k</Text>

                  </View>

                  <View style={{ flexDirection: 'column', width: '25%' }}>
                    <Image

                      source={require("./../../../../assets/icons8-mobility-scooter-20.png")}

                      style={cStyle.image1}
                    />

                    <Text style={cStyle.text2}>Free</Text>

                  </View>
                  <View style={{ flexDirection: 'column', width: '25%', paddingRight: '10%' }}>
                    <Image

                      source={require("./../../../../assets/icons8-wi-fi-20.png")}

                      style={cStyle.image1}
                    />

                    <Text style={cStyle.text2}>100k</Text>

                  </View>

                </View>




              </View>


              <View style={{ flexDirection: 'column', backgroundColor: '#FFFFFF', marginBottom: 8, paddingLeft: '5%' }}>

                <Text style={{ paddingTop: '5%', fontSize: 24 }}>Lưu ý</Text>
                <Text style={{ paddingTop: '5%' }}>SỨC CHỨA</Text>
                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                  <View style={{ flexDirection: 'column', width: '33%', paddingTop: '5%' }}>
                    <Text style={{ paddingTop: '5%', paddingBottom: '5%', color: '#FFAB1D' }}> 3 người+</Text>
                    <Button
                      style={{ height: 5, backgroundColor: '#FFAB1D', marginTop: 10, borderRadius: 40, borderColor: '#FFAB1D', }}
                      disabled={false}
                      buttonStyle={{ backgroundColor: '#FFAB1D' }}>

                    </Button>
                    <Text style={{ paddingTop: '5%' }} >Chật</Text>
                  </View>

                  <View style={{ flexDirection: 'column', width: '33%', paddingTop: '5%', paddingLeft: '1%' }}>
                    <Text style={{ paddingTop: '5%', paddingBottom: '5%', color: '#0AD878', paddingLeft: '30%' }}> 2 người</Text>
                    <Button
                      style={{ height: 5, backgroundColor: '#0AD878', marginTop: 10, borderRadius: 40 }}
                      disabled={false}
                      buttonStyle={{ backgroundColor: '#0AD878' }}>

                    </Button>
                    <Text style={{ paddingTop: '5%', paddingLeft: '40%' }} >Ổn</Text>
                  </View>

                  <View style={{ flexDirection: 'column', width: '33%', paddingTop: '5%', paddingLeft: '1%', paddingRight: '1%' }}>
                    <Text style={{ paddingTop: '5%', paddingBottom: '5%', color: '#0BC5BF', paddingLeft: '50%' }}> 1 người</Text>
                    <Button
                      style={{ height: 5, backgroundColor: '#0BC5BF', marginTop: 10, borderRadius: 40 }}
                      disabled={false}
                      buttonStyle={{ backgroundColor: '#0BC5BF' }}>

                    </Button>
                    <Text style={{ paddingTop: '5%', paddingLeft: '60%' }} >Rộng</Text>
                  </View>

                </View>
              </View>

              <View style={{ flexDirection: 'column', backgroundColor: '#FFFFFF', paddingTop: '5%', marginBottom: 8, paddingLeft: '5%' }}>

                <Text style={{ fontSize: 24 }}>Tiện ích</Text>

                <View style={cStyle.styleview4}>
                  <View style={{ flexDirection: 'column', width: '25%' }}>
                    <Icon

                      name='airplay'
                      type='material'
                      color='#C8C8C8'
                      iconStyle={{ width: 25, height: 25 }}

                    />
                    <Text style={cStyle.text4}>Máy lạnh</Text>

                  </View>

                  <View style={{ flexDirection: 'column', width: '25%' }}>
                    <Icon

                      name='wc'
                      type='material'
                      color='#C8C8C8'

                      iconStyle={{ width: 25, height: 25 }}
                    />
                    <Text style={cStyle.text4}>WC Riêng</Text>

                  </View>

                  <View style={{ flexDirection: 'column', width: '25%' }}>
                    <Icon

                      name='motorcycle'
                      type='material'
                      color='#C8C8C8'

                      iconStyle={{ width: 25, height: 25 }}
                    />


                    <Text style={cStyle.text4}>Chỗ để xe</Text>

                  </View>
                  <View style={{ flexDirection: 'column', width: '25%' }}>
                    <Icon

                      name='network-wifi'
                      type='material'
                      color='#C8C8C8'

                      iconStyle={{ width: 25, height: 25 }}
                    />


                    <Text style={cStyle.text4}>Internet</Text>

                  </View>

                </View>


                <View style={cStyle.styleview5}>
                  <View style={{ flexDirection: 'column', width: '25%' }}>
                    <Icon

                      name='security'
                      type='material'
                      color='#C8C8C8'
                      iconStyle={{ width: 25, height: 25 }}

                    />
                    <Text style={cStyle.text4}> An ninh</Text>

                  </View>

                  <View style={{ flexDirection: 'column', width: '25%' }}>
                    <Icon

                      name='pets'
                      type='material'
                      color='#C8C8C8'

                      iconStyle={{ width: 25, height: 25 }}
                    />
                    <Text style={cStyle.text4}>Thú cưng</Text>

                  </View>

                  <View style={{ flexDirection: 'column', width: '25%' }}>
                    <Icon

                      name='hotel'
                      type='material'
                      color='#C8C8C8'

                      iconStyle={{ width: 25, height: 25 }}
                    />


                    <Text style={cStyle.text4}>Có giường</Text>

                  </View>
                  <View style={{ flexDirection: 'column', width: '25%' }}>
                    <Icon

                      name='kitchen'
                      type='material'
                      color='#C8C8C8'

                      iconStyle={{ width: 25, height: 25 }}
                    />


                    <Text style={cStyle.text4}>Tủ lạnh</Text>

                  </View>

                </View>


                <View style={cStyle.styleview2}></View>


              </View>

              <View style={{ flexDirection: 'column', marginBottom: 8, paddingTop: '5%', paddingLeft: '5%', backgroundColor: '#fff' }}>

                <Text style={{ fontSize: 24 }}>Địa chỉ</Text>

                <View style={{ flexDirection: 'row', paddingTop: '5%', paddingRight: '3%' }}>
                  <ImageBackground source={require("./../../../..//assets/icons8-place-marker-20.png")}
                    style={{ width: 20, height: 20, color: '#0F389F' }} />
                  <Text style={{ paddingLeft: '3%' }}>24/4 Xô Viết Nghệ Tĩnh, P2, Quận Bình Thạnh</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: '5%', paddingRight: '3%' }} >
                  <Icon

                    name='phone'
                    type='material'
                    color='#C8C8C8'

                    iconStyle={{ width: 25, height: 30 }}
                  />
                  <Text style={{ paddingLeft: '3%' }}>Điện thoại: 0987608709</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'column', marginBottom: 8, paddingTop: '5%', paddingLeft: '5%', backgroundColor: '#fff' }}>

                <Text style={{ fontSize: 24 }}>Ngày đăng phòng</Text>

                <View style={{ flexDirection: 'row', paddingTop: '5%', paddingRight: '3%', paddingBottom: '3%' }}>
                  <ImageBackground source={require("./../../../..//assets/icons8-calendar-20.png")}
                    style={{ width: 20, height: 20, color: '#0F389F' }} />
                  <Text style={{ paddingLeft: '3%' }}>Hôm qua 07/12/2019</Text>
                </View>

              </View>

              <View style={{ flexDirection: 'column', marginBottom: 8, paddingTop: '5%', paddingLeft: '5%', backgroundColor: '#fff' }}>

                <Text style={{ fontSize: 24 }}>Mô tả</Text>
                <View style={{ paddingTop: '5%', paddingRight: '5%' }}>

                  <Text style={{ paddingTop: '3%' }}>Cho thuê phòng như căn hộ mini, phòng cao cấp, ngay trung tâm quận Bình Thạnh. </Text>
                  <Text style={{ paddingTop: '3%' }}>Vị trí: Gần Bến xe miền đông, chợ Bà Chiểu, đi lại các quận cực dễ dàng</Text>
                  <Text style={{ paddingTop: '3%' }}>Địa chỉ: </Text>
                  <Text style={{ paddingTop: '3%' }}>Tiện ích: Nhà vệ sinh riêng, wifi cực mạnh miễn phí, tự do nấu ăn, an ninh cao, có gác, có chỗ để xe, giờ giấc tự do </Text>
                  <Text style={{ paddingTop: '3%' }}>Phòng rộng từ: 20m đến 44m2, tuỳ theo giá mà bạn lựa chọng Giá:từ 3tr đến 4tr Điện: 3.8k/số Nước:100k/người Xe gửi miễn phí </Text>
                  <Text style={{ paddingTop: '3%', paddingBottom: '3%' }}>Liên hệ ngay 0984064704</Text>
                </View>
              </View>

            </View>
            <Text style={{ fontSize: 24, paddingBottom: '5%', paddingLeft: '5%' }}>Phòng tương tự</Text>
            <FlatList
              onRefresh={this.onRefresh}

              loading={isLoading}
              numColumns={numColumns}
              data={mockData.items}
              renderItem={this.renderItem}
              footerComponent={<ButtonLoadMore
                isAbleToLoadMore={isLoadMore}
                loading={isLoading}

                onPress={this.onLoadMore.bind(this, isLoadMore)} />
              } />

          </ScrollView>
        </SafeAreaView>

        <View style={{ flexDirection: 'row' ,paddingLeft:'5%',paddingTop:'5%'}}>
          <Button
           icon={
            <Icon

              name='chat'
              type='material'
              color='#656565'
              iconStyle={{ marginRight:5 }}
            />

          }
          iconLeft
           containerStyle={{paddingLeft:'5%',paddingBottom:'5%'}}
            buttonStyle={{
              backgroundColor: '#fff',
              borderColor: '#656565',
              borderRadius: 10,
              width:130,
              height:40,
              borderWidth:1,
              borderStyle:'solid'

            }}
            titleStyle={{ color: '#656565' }}
            title="Nhắn tin"></Button>
          <Button
          containerStyle={{paddingLeft:'5%',paddingBottom:'5%'}}
            buttonStyle={{
              backgroundColor: '#4877F8',
              borderColor: '#4877F8',
              borderWidth:1,
              borderRadius: 10,
              width:130,
              height:40

            }}
            titleStyle={{ color: '#ffff' }}
            title="Đặt ngay"></Button>
        </View>


      </Container >

    )
  }
}
const styles = StyleSheet.create({
  searchDefaultStyle: {
    width: '100%',
    height: 40,
    backgroundColor: '#fff',

  },
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

})
