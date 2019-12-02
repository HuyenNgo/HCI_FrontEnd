import React, { Component } from 'react';
import { SafeAreaView, FlatList, RefreshControl, Text, View } from 'react-native';
import baseStyle from './../styles/baseStyle'

export default class FlatListCustom extends Component {

    keyExtractor = (item, index) => index.toString()
    renderItemDefault = (item) => {
        return (<View><Text>renderItem</Text></View>)
    }
    render() {
        const { loading, style, data, renderItem, footerComponent, onRefresh } = this.props
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
                />
            </SafeAreaView>
        )
    }
}

// const styles = StyleSheet.create({
//     buttonDefaultStyle: {
//         width: 120,
//         height: 40,
//         backgroundColor: colors.DODGER_BLUE,
//         margin: 5
//     }
// })