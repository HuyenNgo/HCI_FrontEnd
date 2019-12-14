import React, { Component } from 'react'

import BaseComponent from "./../../../base/components/BaseComponent";
import ButtonNavigation from './../../main/ButtonNavigation'
import { Header, Input, Button, Icon, CheckBox } from 'react-native-elements';
import { SearchBar } from 'react-native-elements';
import colors from '../../../base/config/colors';
import { List, ListItem } from "react-native-elements"
import { StyleSheet, Text, View, TextInput, ImageBackground, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native'
import { Container, Thumbnail, Card, CardItem, Body, Left } from 'native-base';
import RoomItem from './roomItem'
import cStyle from './../../../base/styles/homeStyle'
import * as _d from './../../common/data'
import { FlatList, ButtonLoadMore } from './../../../base/controls';
import metrics from './../../../base/config/metrics'

export default class HomePage extends BaseComponent {
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
  _onPress(item) {
    this.props.navigation.navigate('DetailRoom'
    );
   
  }
  renderItem = ({ item }) => {

    return (
      <TouchableOpacity  onPress={() => this._onPress(item)}>
    <RoomItem item={item} />
    </TouchableOpacity>
    
    
    )
  }

  render() {
    const { search } = this.state;
    const numColumns = 2
    const { number, dateValue, mockData, isLoading } = this.state
    const isLoadMore = this.canLoadMore(mockData)
    return (
      <Container>


         

          <Header
            backgroundColor='#fff'
            centerComponent={
            <SearchBar
                lightTheme
                containerStyle={{ width: metrics.DEVICE_WIDTH * 2 / 3 +90, padding:-5,backgroundColor: '#fff'}}
                placeholder='Type here...'
                platform='android'
                leftComponentDisable={true}
               
            />}
            rightComponent={
            <Button 
            icon={
              <Icon

                name='home'
                type='material'
                color='#4877F8'
                // onPress={() => this.props.navigation.navigate('Location')}
               
              />

            } 
            type="clear"
            
            onPress={() => this.props.navigation.navigate('Location')} />}
          />
        


        


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
    backgroundColor: 'transparent',
    height: '100%'
  },

})
