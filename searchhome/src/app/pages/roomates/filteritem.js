import React,{Component} from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements'
import { ListItem, Thumbnail, Card, CardItem, Body, Left } from 'native-base';
export default class DistrictItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            styletext: styles.tiltle,
            styleButton: styles.stylebutton,
            styleButtonClick: styles.styleButtonClick,
            styletextClick: styles.tiltleClick,
            value:false

        }
    }
  

    render() {
        const { item } = this.props
        return (
           

                <View style={{ paddingLeft: '4%' }}>

                    <Button

                        type='outline'
                        title={item.name}
                        titleStyle={this.state.value==false ? this.state.styletext : this.state.styletextClick}
                        containerStyle={{ marginTop: 10 }}
                        buttonStyle={this.state.value==false ? this.state.styleButton : this.state.styleButtonClick}
                    onPress={() =>  this.setState({ value:!this.state.value })}
                    />

                </View>
            
        )
    }
};




const styles = StyleSheet.create({

    stylebutton:
    {
        borderColor: '#B7B7B7',
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 10,
        width: 98,
        height: 35
    },
    tiltle:
    {
        fontSize: 13,
        color: '#B7B7B7'
    },
    styleButtonClick:
    {

        borderColor: '#4877F8',
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 10,
        width: 98,
        height: 35
    },
    tiltleClick:
    {
        fontSize: 13,
        color: '#4877F8'
    },


})