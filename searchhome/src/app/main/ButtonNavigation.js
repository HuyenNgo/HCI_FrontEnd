import React, { Component } from 'react';
import { Header, Input, Button, Icon, CheckBox, Text } from 'react-native-elements';
import {
    createSwitchNavigator,
    createAppContainer,
    createDrawerNavigator,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    createStackNavigator,

} from 'react-navigation';
import cStyles from './../../base/styles/styles'
import {
    Information,
    Location,
    Confirm,
    Utilities
} from './../pages/signroom'


const LocationStack = createStackNavigator({
    home:
    {
        screen:Location,
        navigationOptions: {
           
                title: "Đăng phòng",
    
                headerTitleStyle: {
                    color: '#000',
                    fontSize: 20,
    
                    fontWeight: 'normal',
                    alignItems: 'center',
                    marginLeft: 120
    
                },
    
                headerRight: <Text style={cStyles.textheader}>Huỷ</Text>,
                headerStyle: {
                    backgroundColor: '#fff',
    
                },
    
    
            
        }
    },
    Information:

    {
        screen: Information,
        navigationOptions: {
            title: "Đăng phòng",

            headerTitleStyle: {
                color: '#000',
                fontSize: 20,

                fontWeight: 'normal',
                alignItems: 'center',
                marginLeft: 70

            },

            headerRight: <Text style={cStyles.textheader}>Huỷ</Text>,
            headerStyle: {
                backgroundColor: '#fff',

            },

        }
    },
    Utilities:

    {
        screen: Utilities,
        navigationOptions: {
            title: "Đăng phòng",

            headerTitleStyle: {
                color: '#000',
                fontSize: 20,

                fontWeight: 'normal',
                alignItems: 'center',
                marginLeft: 70

            },

            headerRight: <Text style={cStyles.textheader}>Huỷ</Text>,
            headerStyle: {
                backgroundColor: '#fff',

            },


        }
    },

    Confirm:
    {
        screen: Confirm,
        navigationOptions: {
            title: "Đăng phòng",

            headerTitleStyle: {
                color: '#000',
                fontSize: 20,

                fontWeight: 'normal',
                alignItems: 'center',
                marginLeft: 70

            },

            headerRight: <Text style={cStyles.textheader}>Huỷ</Text>,
            headerStyle: {
                backgroundColor: '#fff',
            },

        }
    },

},
    {

        navigationOptions: (navigation) => {
            const { routeName } = navigation.state.routes[navigation.state.index];
            return {

                header: null

            };
        },
        // Home: HomeScreen,
    }

);



class ButtonNavigation extends Component {
    render() {
        return <AppContainer />;
    }
}
export default ButtonNavigation;


const AppContainer = createAppContainer(LocationStack


);