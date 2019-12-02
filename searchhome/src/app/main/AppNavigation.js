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
ProductPage,
CartPage,
ProfilePage
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

class WelcomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    title="Login"
                    onPress={() => this.props.navigation.navigate('Dashboard')}
                />
                <Button title="Sign Up" onPress={() => alert('button pressed')} />
            </View>
        );
    }
}

class Notification extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Notification</Text>
            </View>
        );
    }
}

class Settings extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Settings</Text>
            </View>
        );
    }
}

// const ServiceBillDetailStack = createStackNavigator(
//     {
//         ServiceBillDetailInStack: ServiceBillDetailContainer,
//         ProductSearchAndSelectInStack: ProductSearchAndSelectContainer,
//         CameraRollPickerInStack: CameraRollPickerComponet
//     },
//     {
//         defaultNavigationOptions: ({ navigation }) => {
//             return {
//                 header: null
//             };
//         }
//     }
// );

const HomeStack = createStackNavigator(
    {
        Home: HomePage,
        Product: ProductPage,
        Cart:CartPage,
        Profile:ProfilePage

    
    }
    ,{
        defaultNavigationOptions: ({ navigation }) => {
            return {
                header: null
            };
        }
    }
);





const DashboardTabNavigator = createMaterialTopTabNavigator(
    {
        Home: {
            screen: HomeStack,
            navigationOptions: {
                header:null,
                tabBarLabel:strings.TAB_LABEL_HOME,
                tabBarIcon: ({ tintColor }) => (<Icon
                    name={icons.home}
                    color={tintColor}
                    size={24} />)
         
                    
            }
            
        },
        Product: {
            screen: HomeStack,
            navigationOptions: {
                header:null,
                tabBarLabel:strings.TAB_LABEL_PRODUCT,
                tabBarIcon: ({ tintColor }) => (<Icon
                    name={icons.product}
                    color={tintColor}
                    size={24} />)
                
            }
        },
        Cart: {
            screen: HomeStack,
            navigationOptions: {
                tabBarLabel:strings.TAB_LABEL_CART,
                tabBarIcon: ({ tintColor }) => (<Icon
                    name={icons.cart}
                    color={tintColor}
                    size={24} />)
            }
        },
        Profile: {
            screen: HomeStack,
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
           const { routeName } = navigation.state.routes[navigation.state.index];
            return {
               header:<AppHeader/>
               
            }; 
        },
        initialLayout :{height:60},
        lazy:true,
        tabBarPosition:'bottom',
        tabBarOptions: {
            activeTintColor: colors.ICON_ACTIVE_COLOR,
            inactiveTintColor: colors.ICON_COLOR,
            style:{
                backgroundColor:colors.WHITE,
                height:75
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

const DashboardStackNavigator = createStackNavigator(
    {
        DashboardTabNavigator: DashboardTabNavigator
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
            
                header: null
                
            };
        }
    }
);

const AppDrawerNavigator = createDrawerNavigator({
    Dashboard: {
        screen: DashboardStackNavigator
    },
    DrawerSubScreen: {
        screen: Notification
    }
});

// const AppSwitchNavigator = createSwitchNavigator(
//    {
//     Welcome: { screen: WelcomeScreen },
//     Dashboard: { screen: AppDrawerNavigator }
//    }
//     ,
//     {
//     //   initialRouteName: signedIn ? "Welcome" : "Dashboard"
//     initialRouteName:"Dashboard"
//     }
// );






const AppContainer = createAppContainer(DashboardStackNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

