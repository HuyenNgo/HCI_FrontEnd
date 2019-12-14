import React from 'react';
import { Text, View, Image ,StyleSheet, TouchableOpacity,TouchableHighlight} from 'react-native';
import { Button } from 'react-native-elements'
import { ListItem, Thumbnail, Card, CardItem, Body, Left } from 'native-base';
const DistrictItem = (params) => {
    
        state = {
            styletext: styles.tiltle,
            styleButton:styles.stylebutton
          };
         
    
    return (
        < TouchableHighlight onPress={() =>  this.setState({ styletext: styles.tiltleClick })}>
       
            <View style={{ paddingLeft: '3%'}}>
                
                <Button
                
                   type='outline'
                    title={params.item.name}
                    titleStyle={this.state.styletext}
                    containerStyle={{marginTop:10}}
                    buttonStyle={this.state.styleButton}
                    //onPress={() =>  this.setState({ styletext: styles.tiltleClick })}
                />
           
        </View>
      </TouchableHighlight>
    )
};

export default DistrictItem;


const styles=StyleSheet.create({

    stylebutton:
    {
        borderColor:'#B7B7B7',
        borderWidth:1,
        borderRadius:20,
        marginTop:10,
        width:100,
        height:35
    },
    tiltle:
    {
        fontSize:13,
        color:'#B7B7B7'
    },
    styleButtonClick:
    {
        
        borderColor:'#4877F8',
        borderWidth:1,
        borderRadius:20,
        marginTop:10,
        width:100,
        height:35
    },
    tiltleClick:
    {
        fontSize:13,
        color:'#4877F8'
    },


})