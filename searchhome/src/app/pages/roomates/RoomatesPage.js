import React, { Component } from 'react'
import { Text, View ,TouchableOpacity } from 'react-native'
import  BaseComponent from "../../../base/components/BaseComponent";
import {Header,Button,Icon} from 'react-native-elements'
import { FlatList,ButtonLoadMore} from '../../../base/controls';
import {  Container, ListItem, Thumbnail, Card, CardItem, Body,Left  } from 'native-base';
import RoomateItem from './RoomateItem'
import * as _d from './../../common/dataRoomate'
export default class  RoomatesPage extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            dateValue: new Date(),
            mockData: {
                items: [],
                currentPage: 1,
                pageSize: 3,
                pageCount: 2,
               
            },
            isLoading:false,
           
            
        }
    }
    componentDidMount(){
        this.onRefresh()
      }
    
    onLoadMore = (isAbleToLoadMore) => {
        if (isAbleToLoadMore) {
            this.setState({ isLoading:true })
            this.setState({
                ...this.state,
                mockData: {
                    items: [...this.state.mockData.items,
                        ..._d.data
                    ],
                    currentPage: 2,
                    pageCount: 2,
                    pageSize: 3,                   
                },
                isLoading: false
               
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
                    pageSize: 5,
                },
                isLoading: false
             
            })
        }
    }
    _onPress(item) {
        this.props.navigation.navigate('DetailRoomate'
        );
      }
    renderItem = ({ item }) => {
       
        return(
            <TouchableOpacity  onPress={() => this._onPress(item)}>
                <RoomateItem item={item} />
       </TouchableOpacity >
        );
    };


  render() {

    const { number, dateValue, mockData,isLoading } = this.state
    const isLoadMore = this.canLoadMore(mockData)

    return (
      <Container >
           <Header
            backgroundColor='#fff'
            centerComponent={{ text: 'Tìm phòng ở ghép', style: { color: '#000' ,fontSize:18} }}
           
            rightComponent={
            <Button 
            icon={
              <Icon

                name='sort'
                type='material'
                color='#4877F8'
                onPress={() => this.props.navigation.navigate('Filter')}
               
              />

            } 
            type="clear"
            
            onPress={() => this.props.navigation.navigate('Location')} />}
          />
         <FlatList
                    onRefresh={this.onRefresh}
                    loading={isLoading}
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
