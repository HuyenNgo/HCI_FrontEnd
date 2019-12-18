import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import { Header, Button, CheckBox, Input } from 'react-native-elements'
import { Container, Thumbnail } from 'native-base'
import BaseComponent from "../../../base/components/BaseComponent";
import { FlatList, ButtonLoadMore } from './../../../base/controls';
import * as _d from './../../common/dataApproved'
import Modal from "react-native-modal";
import PendingItem from './PendingItem'
import { RadioButton } from 'react-native-paper';
import cStyle from './../../../base/styles/pendingStyle'
import constants from './../../../base/config/constants'


export default class PendingPage extends BaseComponent {
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
      visible: false,
      status: false,
      status1: false,
      modalVisible: false,


    }
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
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
  componentDidMount() {
    this.onRefresh()
  }
  updateSearch = search => {
    this.setState({ search });
  };
  
  renderItem = ({ item }) => {

    return (
      <TouchableOpacity >
        <View style={cStyle.imageStyle}
        // style={{ height: 300 }}
        >

          <View >
            <Thumbnail square source={{
              uri: item.avatar ? item.avatar : constants.NO_IMAGE_LINK
            }}
              style={{ width: 100, height: 90, borderRadius: 6, marginTop: 15 }}

            // style={{ height: 300 }}
            // onPress={() => console.log('getItemHandle')} 
            />
          </View>
          <View style={cStyle.styleview1}>
            <View style={{ flexDirection: 'row' }}>

              <Text style={cStyle.textStyle1}>{item.type}</Text>

            </View>
            <Text style={cStyle.textNameStyle1}>{item.name}</Text>

            <Text note numberOfLines={1} style={cStyle.textPrice1}>{item.price}</Text>
            <Text style={cStyle.textAddress1}>{item.address}</Text>
            {item.status == 'Hết phòng' ? <Text style={cStyle.textPrice1}>{item.status}</Text>
              :
              <Text style={cStyle.textPrice2}>{item.status}</Text>}


          </View>
          <View style={{ paddingLeft: '1%' }}>
            <CheckBox
              containerStyle={{ paddingTop: '20%', marginLeft: 5 }}

              checked={this.state.status == true ? this.state.status : this.state.status1}
              size={20}
              onPress={() => this.setState({ status1: !this.state.status1, visible: !this.state.visible })}
            />
          </View>
        </View>
      </TouchableOpacity>


    )
  }

  render() {
    const { number, dateValue, mockData } = this.state
    const isLoadMore = this.canLoadMore(mockData)

    return (

      <Container style={{ backgroundColor: '#F6F7F9' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingRight: '2%' }}>
          <Text style={{ paddingTop: '3%' }}>Chọn tất cả</Text>
          <CheckBox
            containerStyle={{ marginLeft: 30 }}
            checked={this.state.status}
            size={20}
            onPress={() => this.setState({ status: !this.state.status, visible: !this.state.visible, })}
          />

        </View>
        <FlatList
          onRefresh={this.onRefresh}


          numColumns={1}
          data={mockData.items}
          renderItem={this.renderItem}
        />
        {this.state.visible == true && this.state.status == false ?
          <View style={{ backgroundColor: "#fff", margin: 10 }}>
            <Button title="Xoá" type='outline' containerStyle={styles.buttonDelete} titleStyle={{color:'#fff'}} />
            <Button title="Cập nhật trạng thái" type='outline' containerStyle={styles.buttonUpdate}
              onPress={() => { this.setModalVisible(true) }}  titleStyle={{color:'#fff'}}/>
            <Button title="Xem chi tiết" type='outline' containerStyle={styles.buttonView} />
          </View> : <View></View>
        }
        {
          this.state.status == true ?
            <View style={{ backgroundColor: "#fff", margin: 10 }}>
              <Button title="Xoá" type='outline' containerStyle={styles.buttonDelete} titleStyle={{color:'#fff'}}/>
              <Button title="Cập nhật trạng thái" type='outline' containerStyle={styles.buttonUpdate} titleStyle={{color:'#fff'}}
                onPress={() => { this.setModalVisible(true) }}
              />

            </View> : <View></View>
        }
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
            <Text style={{fontSize:20,fontWeight:'500'}}>Thay đổi trạng thái chỗ thuê</Text>

            <RadioButton.Group
              onValueChange={value => this.setState({ value })}
              value={this.state.value}


            >
              

            

              <View style={{ flexDirection: 'row', paddingTop: '5%' }}>
                <View style={{ paddingTop: '2%' }}>
                  <RadioButton value="Còn Phòng"
                    color={'#4877F8'}
                    selectedButtonColor={'#4877F8'} />
                </View>
                <View style={{ width: '80%' }}>
                  <Input

                    placeholder='Còn Phòng'
                    editable={false}
                  />
                </View>
              </View>

              <View style={{ flexDirection: 'row', paddingTop: '5%' }}>
                <View style={{ paddingTop: '2%' }}>
                  <RadioButton value="Hết phòng"
                    color={'#4877F8'}
                    selectedButtonColor={'#4877F8'}
                  />
                </View>
                <View style={{ width: '80%',paddingBottom:'2%' }}>
                  <Input

                    placeholder='Hết phòng'
                    editable={false}
                  />
                </View>
              </View>

            </RadioButton.Group>


            <Button
              title="Xác nhận"
              type="solid"
              containerStyle={{marginTop:10}}
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
            />

          </View>

        </Modal>
      </Container>
    )
  }
}

const styles = StyleSheet.create(


  {
    buttonDelete:
    {
      backgroundColor: '#EB2137',
      marginBottom:4
    },
    buttonUpdate:
    {
      backgroundColor: '#4877F8',
      marginBottom:4
    },

    buttonView:
    {
      backgroundColor: 'transparent'
    },
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
      paddingBottom: '6%'
    }

  }
)