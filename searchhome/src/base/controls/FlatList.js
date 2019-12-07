import React, { Component } from 'react';
import { SafeAreaView, FlatList, RefreshControl, Text, View,ScrollView } from 'react-native';
import baseStyle from './../styles/baseStyle'

export default class FlatListCustom extends Component {

    keyExtractor = (item, index) => index.toString()
    renderItemDefault = (item) => {
        return (<View><Text>renderItem</Text></View>)
    }
    render() {
        const { loading, style, data, renderItem, footerComponent, onRefresh,numColumns } = this.props
        //console.log(data)
        return (
            <SafeAreaView style={style ? style : baseStyle.flatListContainer}>
            
                <FlatList                    
                    refreshControl={
                        <RefreshControl
                            refreshing={loading}              //bool IsRefresh indicator
                            onRefresh={onRefresh}        // If yes, do function                    
                        />
                    }
                    keyExtractor={this.keyExtractor}
                    data={data?data:[]}
                    renderItem={renderItem ? renderItem : this.renderItemDefault}
                    ListFooterComponent={footerComponent}
                    numColumns={numColumns?numColumns:1}
                    onEndReachedThreshold={0.5}
     
                />
               
            </SafeAreaView>
        )
    }
}

