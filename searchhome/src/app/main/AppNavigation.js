import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
//config
import icons from './../../base/config/icons'
import colors from './../../base/config/colors'
import strings from './../../base/config/strings'
//view

import 
{HomePage,
RoomatesPage,
SearchPage,
ProfilePage,
ChatPage
 } from '../pages'

import { AppHeader} from './../common/controls/header'

import {
    createSwitchNavigator,
    createAppContainer,
    createDrawerNavigator,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    createStackNavigator,
    TabNavigator
} from 'react-navigation';
class AppNavigation extends Component {
    render() {
        return <AppContainer />;
    }
}
export default AppNavigation;



const HomeStack = createStackNavigator(
    {
        Home: HomePage,
       
    }
    ,{
        defaultNavigationOptions: () => {
            return {
                header: null
            };
        }
    }
);

const RoomateStack = createStackNavigator(
    {
        Home: RoomatesPage,
        

    
    }
    // ,{
    //     defaultNavigationOptions: () => {
    //         return {
    //             header: null
    //         };
    //     }
    // }
);
const SearchStack = createStackNavigator(
    {
        Home: SearchPage,
        

    
    }
    // ,{
    //     defaultNavigationOptions: () => {
    //         return {
    //             header: null
    //         };
    //     }
    // }
);
const ChatStack = createStackNavigator(
    {
        Home: ChatPage,
        
    
    }
    // ,{
    //     defaultNavigationOptions: () => {
    //         return {
    //             header: null
    //         };
    //     }
    // }
);
const ProfileStack = createStackNavigator(
    {
        Home: ProfilePage,
       

    
    }
    // ,{
    //     defaultNavigationOptions: () => {
    //         return {
    //             header: null
    //         };
    //     }
    // }
);




const DashboardTabNavigator = createBottomTabNavigator(
    {
        PageHome: {
            screen:HomeStack,
            navigationOptions: {
                header:null,
                tabBarLabel:strings.TAB_LABEL_HOME,
                tabBarIcon: ({ tintColor }) => (<Icon
                    name={icons.home}
                    color={tintColor}
                    size={24} />)
         
                    
            }
            
        },
        Roomates: {
            screen:RoomateStack,
            navigationOptions: {
                header:null,
                tabBarLabel:strings.TAB_LABEL_ROOMATES,
                tabBarIcon: ({ tintColor }) => (<Icon
                    name={icons.roomate}
                    color={tintColor}
                    size={24} />)
                
            }
        },
        Search: {
            screen: SearchStack,
            navigationOptions: {
                tabBarLabel:strings.TAB_LABEL_SEARCH,
                tabBarIcon: ({ tintColor }) => (<Icon
                    name={icons.search}
                    color={tintColor}
                    size={24} />)
            }
        },
      Message: {
            screen: ChatStack,
            navigationOptions: {
                tabBarLabel:strings.TAB_LABEL_MESSAGE,
               
                tabBarIcon: ({ tintColor }) => (<Icon
                    name={icons.message}
                    color={tintColor}
                    size={24} />)   
            }
        },
        Profile: {
            screen: ProfileStack,
            navigationOptions: {
                tabBarLabel:strings.TAB_LABEL_PROFILE,
               
                tabBarIcon: ({ tintColor }) => (<Icon
                    name={icons.profile}
                    color={tintColor}
                    size={24} />)
            }
        },

    },
    {
        navigationOptions: () => {
           
            return {
               header:null
               
            }; 
        },
        initialLayout :{height:40},
        //lazy:true,
        tabBarPosition:'bottom',
        tabBarOptions: {
            activeTintColor: colors.ICON_ACTIVE_COLOR,
            inactiveTintColor: colors.ICON_COLOR,
            style:{
                backgroundColor:colors.WHITE,
                height:60,
                marginBottom:10
            },
            indicatorStyle:{
                height:0
            },
            showIcon:true,
            swipeEnabled: true,
           animationEnabled:true
        }
    }
);







const AppContainer = createAppContainer(DashboardTabNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

