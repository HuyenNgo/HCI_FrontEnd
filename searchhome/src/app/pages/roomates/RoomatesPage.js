import React, { Component } from 'react'
import { Text, View } from 'react-native'
import  BaseComponent from "../../../base/components/BaseComponent";
import { FlatList,ButtonLoadMore} from '../../../base/controls';
import {  Container, ListItem, Thumbnail, Card, CardItem, Body,Left  } from 'native-base';
import RoomateItem from './RoomateItem'
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
                    { name: 'Golden', price: 2300, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTH3_0S-yff9aTBXOnGbhfc44R0XPbb7J17xEMkOPZX-ONw4yJe' },
                    { name: 'Husky', price: 2400, avatar: 'https://townsquare.media/site/920/files/2019/09/Brady-1.jpg?w=980&q=75' },
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
                    items: [
                        { name: 'Fock', price: 2000, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWQc23hknGQPzWTw5qo-hzbxo4tKefQ-T32HyhM2AVA1nSPyNM' },
                        { name: 'Shiba', price: 2100, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMmQbECLPIK4bSyYm3L-f5OOF22YMBFJWqW8UtDKAXu7xbS7Wm' },
                        { name: 'Cat', price: 2200, avatar: 'https://i.guim.co.uk/img/media/d94042cdc4bf92fbf1c011e855f7de4703360cc2/0_125_3139_1884/master/3139.jpg?width=700&quality=85&auto=format&fit=max&s=510fee6e7c06aa99fc6522e32b5ee0b4' },
                    ],
                    currentPage: 1,
                    pageCount: 2,
                    pageSize: 3,
                },
                isLoading: false
             
            })
        }
    }
    renderItem = ({ item }) => {
       
        return(<RoomateItem item={item} />)
    }


  render() {

    const { number, dateValue, mockData,isLoading } = this.state
    const isLoadMore = this.canLoadMore(mockData)

    return (
      <Container>
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
