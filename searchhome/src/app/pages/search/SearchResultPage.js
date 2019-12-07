import React, { Component } from 'react';
import { StyleSheet, TextInput, ImageBackground, Text, View, Image } from 'react-native'
import BaseComponent from "../../../base/components/BaseComponent";
import { Header, Input, Button, Icon, CheckBox } from 'react-native-elements';
import { Container, Thumbnail, Card, CardItem, Body, Left } from 'native-base';
import styles from '../../../base/styles/search'
import FlatList from '../../../base/controls/FlatList'
import ButtonLoadMore from '../../../base/controls/ButtonLoadMore'
import ResultItem from './resultItem'
import  * as _d from '../../common/dataResult'
export default class SearchResultPage extends BaseComponent {

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

        return (<ResultItem item={item} />)
    }


    render() {

        const { search } = this.state;

        const { number, dateValue, mockData, isLoading } = this.state
        const isLoadMore = this.canLoadMore(mockData)


        return (
            <Container>

                <View style={{ flexDirection: 'column' ,marginBottom:20}}>

                    <View style={styles.style1}>

                        <View style={{ width: 20, height: 20, maginTop: 5 }}>

                            <ImageBackground source={require("./../../../..//assets/icons8-place-marker-20.png")}
                                style={{ width: '100%', height: '100%', color: '#0F389F' }} />
                        </View>
                        <View >

                            <Text style={styles.titleText}>Gần bến xe miền Đông</Text>
                        </View>
                        <View >
                            <Text style={styles.textHuy} >Huỷ</Text>
                        </View>
                    </View>

                    <View >
                        <Text style={styles.style2} >Tìm thấy 100 điểm phù hợp</Text>
                    </View>

                </View>


                <FlatList
                    onRefresh={this.onRefresh}

                    loading={isLoading}
                    data={mockData.items}
                    renderItem={this.renderItem}
                    footerComponent=
                    {
                        <ButtonLoadMore
                            isAbleToLoadMore={isLoadMore}
                            loading={isLoading}

                            onPress={this.onLoadMore.bind(this, isLoadMore)} />
                    } />

            </Container>


        );
    }
}
