import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
//config
import icons from './../../base/config/icons'
import colors from './../../base/config/colors'
import strings from './../../base/config/strings'
import cStyles from './../../base/styles/styles'


//view
//PAGE
import {
    Information,
    Location,
    Confirm,
    Utilities
} from './../pages/signroom'
import SearchResultPage from './../pages/search/SearchResultPage'
import FilterPage from './../pages/roomates/filter'
import FilterSearchPage from './../pages/search/filterSearch'
import DetailRoomPage from './../pages/home/DetailRoomPage'
import DetailRoomatePage from './../pages/roomates/roomateDetail'
import ChatDetailPage from './../pages/chat/ChatDetailPage'
import DetailPage from './../pages/profile/detail'
import PendingPage from './../pages/profile/PendingPage'
import AccountPage from './../pages/profile/AccountPage'
import {
    HomePage,
    RoomatesPage,
    SearchPage,
    ProfilePage,
    ChatPage
} from '../pages'

import { AppHeader } from './../common/controls/header'

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
        Home:
        {
            screen: HomePage,
            navigationOptions: {
                header: null
            }
        },
        Location:
        {
            screen: Location,
            navigationOptions: {

                tabBarVisible: false,
                title: "Đăng phòng",

                headerTitleStyle: {
                    color: '#000',
                    fontSize: 20,

                    fontWeight: 'normal',
                    alignItems: 'center',
                    marginLeft: 120

                },
                headerLeft: null,
                headerRight: <Text style={cStyles.textheader}>Huỷ</Text>,
                headerStyle: {
                    backgroundColor: '#fff',

                },

            }
        },

        DetailRoom:
        {
            screen: DetailRoomPage,
            navigationOptions: {
                header: null,
                tabBarVisible: false,
                tabBarOptions: false,
            },


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

                headerRight: <Text style={cStyles.textheader}  >Huỷ</Text>,
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

                headerRight: <Text style={cStyles.textheader} >Huỷ</Text>,
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



    }

    // , {
    //     defaultNavigationOptions: () => {
    //         return {
    //             header: null,

    //         };
    //     }
    // }
);

HomeStack.navigationOptions = ({ navigation }) => {

    let tabBarVisible = true;

    let routeName = navigation.state.routes[navigation.state.index].routeName

    if (routeName == 'Location' || routeName == 'DetailRoom' || routeName == 'Confirm' || routeName == 'Utilities' || routeName == 'Information') {
        tabBarVisible = false
    }

    return {
        tabBarVisible,
    }
}

const RoomateStack = createStackNavigator(
    {
        Home: RoomatesPage,
        DetailRoomate: DetailRoomatePage,
        Filter: FilterPage


    },
    {
        defaultNavigationOptions: () => {
            return {
                header: null
            };
        }
    }
);
const SearchStack = createStackNavigator(
    {
        Home: SearchPage,
        SearchResult: SearchResultPage,
        DetailRoom: DetailRoomPage,
        Filter: FilterSearchPage

    }
    , {
        defaultNavigationOptions: () => {
            return {
                header: null
            };
        }
    }
);
const ChatStack = createStackNavigator(
    {
        Home: ChatPage,
        Detail: ChatDetailPage

    }
    , {
        defaultNavigationOptions: () => {
            return {
                header: null
            };
        }
    }
);
const ProfileStack = createStackNavigator(
    {
        Home:
        {
            screen: ProfilePage,
            navigationOptions:
            {
                header:null
            }
        },
        // Pending:
        // {
        //     screen: PendingPage,
        //     navigationOptions:
        //     {
        //         header:null
        //     }
        // },
        // Approved:
        // {
        //     screen: PendingPage,
        //     navigationOptions:
        //     {
        //         header:null
        //     }
        // },
        // Detail:
        // {
        //     screen:DetailPage,
        //     navigationOptions:
        //     {
        //         header:null
        //     }
        // }
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
            screen: HomeStack,
            navigationOptions: {
                header: null,
                tabBarLabel: strings.TAB_LABEL_HOME,
                tabBarIcon: ({ tintColor }) => (<Icon
                    name={icons.home}
                    color={tintColor}
                    size={24} />)


            }

        },
        Roomates: {
            screen: RoomateStack,
            navigationOptions: {
                header: null,
                tabBarLabel: strings.TAB_LABEL_ROOMATES,
                tabBarIcon: ({ tintColor }) => (<Icon
                    name={icons.roomate}
                    color={tintColor}
                    size={24} />)

            }
        },
        Search: {
            screen: SearchStack,
            navigationOptions: {
                tabBarLabel: strings.TAB_LABEL_SEARCH,
                tabBarIcon: ({ tintColor }) => (<Icon
                    name={icons.search}
                    color={tintColor}
                    size={24} />)
            }
        },
        Message: {
            screen: ChatStack,
            navigationOptions: {
                tabBarLabel: strings.TAB_LABEL_MESSAGE,

                tabBarIcon: ({ tintColor }) => (<Icon
                    name={icons.message}
                    color={tintColor}
                    size={24} />)
            }
        },
        Profile: {
            screen: ProfileStack,
            navigationOptions: {
                tabBarLabel: strings.TAB_LABEL_PROFILE,

                tabBarIcon: ({ tintColor }) => (<Icon
                    name={icons.profile}
                    color={tintColor}
                    size={24} />)
            }
        },

    },
    {
        navigationOptions: ({ navigation }) => {

            return {
                header: null,


            };
        },
        initialLayout: { height: 40 },
        //lazy:true,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: colors.ICON_ACTIVE_COLOR,
            inactiveTintColor: colors.ICON_COLOR,
            style: {
                backgroundColor: colors.WHITE,
                height: 60,
                marginBottom: 10
            },
            indicatorStyle: {
                height: 0
            },
            showIcon: true,
            swipeEnabled: true,
            animationEnabled: true
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

