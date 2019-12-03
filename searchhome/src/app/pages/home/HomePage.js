import React, { Component } from 'react'

import BaseComponent from "./../../../base/components/BaseComponent";
import { Header, Input, Button, Icon, CheckBox } from 'react-native-elements';
import { SearchBar } from 'react-native-elements';
import colors from '../../../base/config/colors';
import { List, ListItem } from "react-native-elements"
import { StyleSheet, Text, View, TextInput, ImageBackground, SafeAreaView, ScrollView, } from 'react-native'
import { Container, Thumbnail, Card, CardItem, Body, Left } from 'native-base';
import RoomItem from './roomItem'
import cStyle from './../../../base/styles/homeStyle'
import { FlatList, ButtonLoadMore } from './../../../base/controls';
export default class HomePage extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      search:'',
        number: 0,
        dateValue: new Date(),
        mockData: {
            items: [],
            currentPage: 1,
            pageSize: 3,
            pageCount: 2,
           
        },
        isLoading:false
        
    }
}

componentDidMount(){
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
          { name: 'Căn hộ đường 34-Gần Lotte quận 7',type:'căn hộ', address:'Nguyễn Tư Giản, Gò Vấp',price: '2.3tr', avatar: 'https://tromoi.com/uploads/guest/o_1dr06j9idmugceg1u316pm102im.jpg' },
          { name: 'Phòng cho thuê gần Phan Xích Long',type:'phòng cho thuê',address:'Hoài Thanh, Quận 8', price:'4.5tr', avatar: 'https://tromoi.com/uploads/guest/o_1dr06j9idmugceg1u316pm102im.jpg' },
          ],
          currentPage: 2,
          pageCount: 2,
          pageSize: 8,
        },
        isLoading: false,
        numColumns:2

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
          items: [
            { name: 'Căn hộ đường 34-Gần Lotte quận 7',type:'căn hộ', address:'Nguyễn Tư Giản, Gò Vấp',price: '2.3tr',  avatar: 'https://tromoi.com/uploads/guest/o_1dr06j9idmugceg1u316pm102im.jpg'},
            { name: 'Căn hộ đường 34-Gần Lotte quận 7',type:'căn hộ', address:'Nguyễn Tư Giản, Gò Vấp',price: '2.3tr',  avatar: 'https://tromoi.com/uploads/guest/o_1dr06j9idmugceg1u316pm102im.jpg' },
            { name: 'Căn hộ đường 34-Gần Lotte quận 7',type:'căn hộ', address:'Nguyễn Tư Giản, Gò Vấp',price: '2.3tr',  avatar: 'https://tromoi.com/uploads/guest/o_1dr06j9idmugceg1u316pm102im.jpg' },
            { name: 'Căn hộ đường 34-Gần Lotte quận 7',type:'căn hộ', address:'Nguyễn Tư Giản, Gò Vấp',price: '2.3tr',  avatar: 'https://tromoi.com/uploads/guest/o_1dr06j9idmugceg1u316pm102im.jpg' },
            { name: 'Căn hộ đường 34-Gần Lotte quận 7',type:'căn hộ', address:'Nguyễn Tư Giản, Gò Vấp',price: '2.3tr',  avatar: 'https://tromoi.com/uploads/guest/o_1dr06j9idmugceg1u316pm102im.jpg' },
            { name: 'Căn hộ đường 34-Gần Lotte quận 7',type:'căn hộ', address:'Nguyễn Tư Giản, Gò Vấp',price: '2.3tr',  avatar: 'https://cdn.luxstay.com/rooms/28922/medium/room_28922_338_1564807803.jpg' },
            { name: 'Căn hộ đường 34-Gần Lotte quận 7',type:'căn hộ', address:'Nguyễn Tư Giản, Gò Vấp',price: '2.3tr',  avatar: 'https://cdn.luxstay.com/rooms/24805/medium/room_24805_4_1557578956.jpg' },
            { name: 'Căn hộ đường 34-Gần Lotte quận 7',type:'căn hộ', address:'Nguyễn Tư Giản, Gò Vấp',price: '2.3tr',  avatar: 'https://cdn.luxstay.com/rooms/11819/medium/1537859121_IMG_1787.JPG' },
            { name: 'Căn hộ đường 34-Gần Lotte quận 7',type:'căn hộ', address:'Nguyễn Tư Giản, Gò Vấp',price: '2.3tr',  avatar: 'https://cdn.luxstay.com/rooms/23625/medium/room_23625_169_1566978422.jpg' },
            { name: 'Căn hộ đường 34-Gần Lotte quận 7',type:'căn hộ', address:'Nguyễn Tư Giản, Gò Vấp',price: '2.3tr',  avatar: 'https://cdn.luxstay.com/rooms/23625/medium/room_23625_169_1566978422.jpg' },
            //{ name: 'Căn hộ đường 34-Gần Lotte quận 7',type:'căn hộ', address:'Nguyễn Tư Giản, Gò Vấp',price: '2.3tr',  avatar: 'https://cdn.luxstay.com/rooms/23625/medium/room_23625_169_1566978422.jpg' },
          ],
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
    const numColumns=2
    const { number, dateValue, mockData, isLoading} = this.state
    const isLoadMore = this.canLoadMore(mockData)
    return (
      <Container>
    
        <View style={cStyle.stylesheader}>
          <View style={cStyle.viewtab}>

            <SearchBar

              placeholder="Type Here..."
              onChangeText={this.updateSearch}
              value={search}
              platform='android'

              containerStyle={{ backgroundColor: 'transparent', height: 45 }}

            />
          </View>
          <View style={cStyle.styleViewButton}>
            <Button
              icon={
                <Icon

                  name='home'
                  type='material'
                  color='#4877F8'
                />

              }
              buttonStyle={{
                backgroundColor: '#FFFFFF',

              }}
              containerStyle={{ borderColor: '#4877F8', }}
              type="clear"
            />
          </View>
        </View>


{/* 
         <View style={cStyle.viewbody}>
         </View> */}

      
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
             
         </Container>
      
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
    backgroundColor:'transparent',
    height: '100%'
  },

})
