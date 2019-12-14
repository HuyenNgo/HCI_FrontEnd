import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Header, Button, CheckBox } from 'react-native-elements'
import { Container } from 'native-base'
import BaseComponent from "../../../base/components/BaseComponent";
import { FlatList, ButtonLoadMore } from './../../../base/controls';
import * as _d from './../../common/dataApproved'
import PendingItem from './PendingItem'
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
      status:false


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


      })
    }
  }
  componentDidMount() {
    this.onRefresh()
  }
  updateSearch = search => {
    this.setState({ search });
  };
  _onPress(item) {
    this.setState({ visible: !this.state.visible })
  }
  renderItem = ({ item }) => {

    return (
      <TouchableOpacity onPress={() => this._onPress(item)}>
        <PendingItem item={item} />
      </TouchableOpacity>


    )
  }

  render() {
    const { number, dateValue, mockData } = this.state
    const isLoadMore = this.canLoadMore(mockData)

    return (

      <Container style={{ backgroundColor: '#F6F7F9' }}>
        <View style={{ flexDirection: 'row',paddingBottom:'3%' ,justifyContent:'flex-end'}}>
          <Text style={{paddingTop:'4%'}}>Chọn tất cả</Text>
          <CheckBox
            containerStyle={{ marginLeft: 30 }}
            checked={this.state.status}
            size={20}
            onPress={() => this.setState({ status: !this.state.status ,visible:!this.state.visible})}
          />

        </View>
        <FlatList
          onRefresh={this.onRefresh}


          numColumns={1}
          data={mockData.items}
          renderItem={this.renderItem}
        />
        {this.state.visible == true && this.state.status ==false ?
          <View style={{backgroundColor: "#fff",margin:10}}>
            <Button title="Xoá" type='outline' containerStyle={styles.buttonDelete}/>
            <Button title="Cập nhật trạng thái" type='outline' containerStyle={styles.buttonUpdate}/>
            <Button title="Xem chi tiết" type='outline' containerStyle={styles.buttonView}/>
          </View> : <View></View>
        }
        {
          this.state.status ==true ?
            <View style={{backgroundColor: "#fff",margin:10}}>
          <Button title="Xoá" type='outline' containerStyle={styles.buttonDelete}/>
          <Button title="Cập nhật trạng thái" type='outline' containerStyle={styles.buttonUpdate}/>
         
        </View> : <View></View>
        }

      </Container>
    )
  }
}

const styles =StyleSheet.create(


  {
     buttonDelete:
     {
       backgroundColor:'transparent'
     },
     buttonUpdate:
     {
       backgroundColor:'transparent'
     },

     buttonView:
     {
       backgroundColor:'transparent'
     }

  }
)