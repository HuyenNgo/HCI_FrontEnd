import React,{Component} from 'react';
import { Text, View, Image ,StyleSheet} from 'react-native';
import { Button, Icon } from 'react-native-elements'
import { ListItem, Thumbnail, Card, CardItem, Body, Left } from 'native-base';

export default class ItemUtilities extends Component {

    constructor(props) {
        super(props);
        this.state = {
            styletext: styles.tiltle,
            styleButton: styles.stylebutton,
            styleButtonClick: styles.styleButtonClick,
            styletextClick: styles.tiltleClick,
            
            value: false

        }
    }


    render() {
        const { item } = this.props
        return (


            <View style={{ paddingLeft: '4%' }}>

                <Button
                    icon={
                        <Icon

                            name={item.name}
                            type='material'
                            color={this.state.value == false ? '#B7B7B7' :'#4877F8' }
                            size={18}
                            iconStyle={{ marginRight: 4, }}
                        />

                    }
                    iconLeft
                    type='outline'
                    title={item.titile}
                    titleStyle={this.state.value == false ? this.state.styletext : this.state.styletextClick}
                    containerStyle={{ marginTop: 10 }}
                    buttonStyle={this.state.value == false ? this.state.styleButton : this.state.styleButtonClick}
                    onPress={() => this.setState({ value: !this.state.value })}
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
        borderRadius: 10,
        marginTop: 10,
        width: 150,
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
        borderRadius: 10,
        marginTop: 10,
        width: 150,
        height: 35
    },
    tiltleClick:
    {
        fontSize: 13,
        color: '#4877F8'
    },
    iconStyle:
    {
        color:'#C8C8C8'
    },
    iconStyleClick:
    {
        color: '#4877F8'
    }

})