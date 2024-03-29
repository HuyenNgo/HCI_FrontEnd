import React, { Component } from 'react'
import { Header, Button, Icon, Input } from 'react-native-elements'
import { View, StyleSheet, Slider, Text, SafeAreaView, ScrollView } from 'react-native'
import { RadioButton } from 'react-native-paper';
import * as _d from './../../common/dataFilter'
import * as _d1 from './../../common/dataUtilities'
import { Container } from 'native-base'

import { FlatList, ButtonLoadMore } from './../../../base/controls';
import DistrictItem from './../roomates/filteritem'
import UtilitiesItem from './../roomates/utilitiesItem'
export default class FilterSearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'first',
            search: '',
            number: 0,
            dateValue: new Date(),
            mockData: {
                items: [],
                currentPage: 1,
                pageSize: 3,
                pageCount: 2,

            },
            mockData1: {
                items: [],
                currentPage: 1,
                pageSize: 3,
                pageCount: 2,

            },
            isLoading: false,
            value: 500000,
            value1: 1,
            button1:false,
            button:false,
            styletext: styles.tiltle,
            styleButton: styles.stylebutton,
            styleButtonClick: styles.styleButtonClick,
            styletextClick: styles.tiltleClick,


        }
    }

    componentDidMount() {
        this.onRefresh()

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
                mockData1: {
                    items: [..._d1.data],
                    currentPage: 1,
                    pageCount: 2,
                    pageSize: 8,
                },
                isLoading: false

            })
        }
    }

    renderItem = ({ item }) => {

        return (
            <DistrictItem item={item} />





        )
    }
    renderItem1 = ({ item }) => {

        return (


            <UtilitiesItem item={item} />


        )
    }

    render() {
        const { search } = this.state;
        const numColumns = 3
        const { number, dateValue, mockData, mockData1, isLoading } = this.state

        return (
            <Container>

                <Header
                    containerStyle={{ backgroundColor: '#fff', borderBottomColor: '#CECECF', borderBottomWidth: 1 }}

                    centerComponent={{ text: 'Lọc', style: { color: '#000', fontSize: 20 } }}
                    leftComponent={
                        <Button
                            icon={
                                <Icon

                                    name='arrow-back'
                                    type='material'
                                    color='#696969'
                                // onPress={() => this.props.navigation.navigate('Location')}

                                />

                            }
                            type="clear"
                            onPress={() => this.props.navigation.navigate('SearchResult')}

                        />
                    }
                    rightComponent={
                        <Button
                            icon={
                                <Icon

                                    name='refresh'
                                    type='material'
                                    color='#4877F8'


                                />

                            }
                            type="clear"

                        />}
                />
                <SafeAreaView style={styles.container}>
                    <ScrollView style={styles.scrollView}>
                        <View style={{ flexDirection: 'column', paddingTop: '5%' }}>
                            <Text style={styles.text}>Mức giá</Text>
                            <Text style={styles.textStyle}>500,000 VNĐ - 5,000,000 VNĐ</Text>
                            {this.state.value == 500000 ?
                                <Text style={styles.textStyle}>Mức giá đang chọn:500,000 VNĐ</Text> :
                                <Text style={styles.textStyle}>Mức giá đang chọn:500,000 VNĐ - {this.state.value} VNĐ</Text>}

                            <View style={{ width: '100%', flexDirection: 'column', paddingTop: '5%', justifyContent: 'flex-start', paddingLeft: '5%' }}>
                                <Slider
                                    style={{ width: '95%', height: 40 }}
                                    minimumValue={500000}
                                    maximumValue={5000000}
                                    thumbTintColor="#4877F8"
                                    minimumTrackTintColor="#4877F8"
                                    maximumTrackTintColor="#000000"
                                    step={200000}
                                    value={500000}
                                    onValueChange={(value) => this.setState({ value: value })}
                                />

                            </View>
                            <Text style={styles.text}>Khoảng cách</Text>
                            <Text style={styles.textStyle}>1.0 km -10 km</Text>
                            {this.state.value1 == 1 ?
                                <Text style={styles.textStyle}>Cách vị trí tìm: 1.0 km</Text> :
                                <Text style={styles.textStyle}>Cách vị trí tìm:1.0 km - {this.state.value1} km</Text>}
                            <View style={{ width: '100%', flexDirection: 'column', paddingTop: '5%', justifyContent: 'flex-start', paddingLeft: '5%' }}>
                                <Slider
                                    style={{ width: '95%', height: 40 }}
                                    minimumValue={1}
                                    maximumValue={10}
                                    thumbTintColor="#4877F8"
                                    minimumTrackTintColor="#4877F8"
                                    maximumTrackTintColor="#000000"
                                    minimumTrackImage={require("./../../../..//assets/icons8-circle-20.png")}
                                    maximumTrackImage={require("./../../../..//assets/icons8-circle-20.png")}
                                    thumbImage={require("./../../../..//assets/icons8-circle-20.png")}
                                    step={0.5}
                                    value1={1}
                                    onValueChange={(value) => this.setState({ value1: value })}
                                />

                            </View>
                            

                        </View>
                        <View style={{ flexDirection: 'column', paddingTop: '5%' }}>
                            <Text style={styles.text}> Loại chỗ ở</Text>
                            <View style={{ width: '100%', flexDirection: 'column', justifyContent: 'flex-start', paddingLeft: '5%' }}>


                                <RadioButton.Group
                                    onValueChange={value => this.setState({ value })}
                                    value={this.state.value}


                                >
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: '5%' }}>
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

                                    

                                </RadioButton.Group>
                            </View>
                            </View>
                        <View style={{ flexDirection: 'column', paddingTop: '10%' }}>
                            <Text style={styles.text}> Sức chứa</Text>
                            <View style={{ width: '100%', flexDirection: 'column', justifyContent: 'flex-start', paddingLeft: '5%' }}>


                                <RadioButton.Group
                                    onValueChange={value => this.setState({ value })}
                                    value={this.state.value}


                                >
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: '5%' }}>
                                        <View style={{ paddingTop: '2%' }}>
                                            <RadioButton value="1- 2 người"
                                                color={'#4877F8'}
                                                selectedButtonColor={'#4877F8'}
                                            />
                                        </View>
                                        <View style={{ width: '80%' }}>
                                            <Input

                                                placeholder='1- 2 người'
                                                editable={false}
                                            />
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: 'row', paddingTop: '5%' }}>
                                        <View style={{ paddingTop: '2%' }}>
                                            <RadioButton value="2 - 4 người"
                                                color={'#4877F8'}
                                                selectedButtonColor={'#4877F8'} />
                                        </View>
                                        <View style={{ width: '80%' }}>
                                            <Input

                                                placeholder='2 - 4 người'
                                                editable={false}
                                            />
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: 'row', paddingTop: '5%' }}>
                                        <View style={{ paddingTop: '2%' }}>
                                            <RadioButton value="4 - 6 người"
                                                color={'#4877F8'}
                                                selectedButtonColor={'#4877F8'} />
                                        </View>
                                        <View style={{ width: '80%' }}>
                                            <Input

                                                placeholder='4 - 6 người'
                                                editable={false}
                                            />
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: 'row', paddingTop: '5%' }}>
                                        <View style={{ paddingTop: '2%' }}>
                                            <RadioButton value="trên 6 người"
                                                color={'#4877F8'}
                                                selectedButtonColor={'#4877F8'}
                                            />
                                        </View>
                                        <View style={{ width: '80%' }}>
                                            <Input

                                                placeholder='trên 6 người'
                                                editable={false}
                                            />
                                        </View>
                                    </View>

                                </RadioButton.Group>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{
                                    paddingTop: '10%', paddingLeft: '5%',
                                    fontSize: 18,
                                    fontWeight: 'bold'
                                }}>Giới tính</Text>
                                <Button
                                    type='outline'
                                    title='Nữ'
                                    titleStyle={this.state.button==false ? this.state.styletext : this.state.styletextClick}
                                    containerStyle={{ marginTop: 20, marginLeft: 20 }}
                                    buttonStyle={this.state.button==false ? this.state.styleButton : this.state.styleButtonClick}
                                    onPress={() =>  this.setState({ button:!this.state.button })}
                                />
                                <Button
                                    type='outline'
                                    title='Nam'
                                    titleStyle={this.state.button1==false ? this.state.styletext : this.state.styletextClick}
                                    containerStyle={{ marginTop: 20, marginLeft: 20 }}
                                    buttonStyle={this.state.button1==false ? this.state.styleButton : this.state.styleButtonClick}
                                    onPress={() =>  this.setState({ button1:!this.state.button1 })}
                               />


                            </View>

                            <Text style={{
                                paddingTop: '5%',
                                paddingLeft: '5%',
                                fontSize: 18,
                                fontWeight: 'bold'
                            }}>Quận</Text>


                        </View>
                        <FlatList
                            numColumns={numColumns}
                            data={mockData.items}
                            renderItem={this.renderItem}
                        />
                        <Text style={{
                            paddingTop: '5%',
                            paddingLeft: '5%',
                            fontSize: 18,
                            fontWeight: 'bold'
                        }}>Tiện ích</Text>
                        <FlatList
                            numColumns={numColumns}
                            data={mockData1.items}
                            renderItem={this.renderItem1}
                        />
                    </ScrollView>
                </SafeAreaView>
                <Button
                    containerStyle={{ paddingLeft: '25%', paddingBottom: '5%', paddingTop: '5%' }}
                    buttonStyle={{
                        backgroundColor: '#4877F8',
                        borderColor: '#4877F8',
                        borderWidth: 1,
                        borderRadius: 10,
                        width: 150,
                        height: 40

                    }}
                    type='solid'
                    titleStyle={{ color: '#ffff' }}
                    title="Áp dụng"></Button>
            </Container>
        )
    }
}

const styles = StyleSheet.create({


    container: {
        flex: 1,

    },
    scrollView: {
        backgroundColor: 'transparent',

    },
    text:
    {
        paddingLeft: '5%',
        fontSize: 18,
        fontWeight: 'bold'
    },
    textStyle:
    {
        paddingLeft: '5%',
        fontSize: 15,
        color: '#5B5B5B',
        paddingTop: '3%'
    },
    stylebutton:
    {
        borderColor: '#B7B7B7',
         borderWidth: 1,
          borderRadius: 20, 
          marginTop: 10,
           width: 100, 
           height: 35 
    },
    styleButtonClick:
    {
        borderColor: '#4877F8',
        borderWidth: 1,
         borderRadius: 20, 
         marginTop: 10,
          width: 100, 
          height: 35 
    },
    tiltle:
    {
        fontSize: 13,
        color: '#B7B7B7'
    },
    tiltleClick:
    {
        fontSize: 13,
        color: '#4877F8'
    },

})
