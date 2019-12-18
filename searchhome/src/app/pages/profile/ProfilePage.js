import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Header } from 'react-native-elements'
import BaseComponent from "../../../base/components/BaseComponent";

import colors from './../../../base/config/colors'
import strings from './../../../base/config/strings'
import PendingPage from './PendingPage'
import AccountPage from './AccountPage'
import DetailPage from './detail'
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createStackNavigator,
  TabNavigator
} from 'react-navigation';
import { Container } from 'native-base';

export default class ProfilePage extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = {

      visible: true
    }

  }

    toggle = ()=>{
      this.setState({visible:!this.state.visible})
    }
  render() {

    return (
      <Container>
        <Header

          containerStyle={{ backgroundColor: '#fff' }}
          centerComponent={{ text: 'Tài khoản', style: { color: '#000', fontSize: 20 } }}
         // rightComponent={{ icon: 'home', color: '#000' }}
       />
        <AppContainer />
        
      </Container>
    )
  }
}


const ProfileStack = createStackNavigator(
  {
    Home: AccountPage,



  }
  , {
    defaultNavigationOptions: () => {
      return {
        header: null
      };
    }
  }
);

const ApprovedStack = createStackNavigator(
  {
    Home: PendingPage,
    Detail: DetailPage



  }
  , {
    defaultNavigationOptions: () => {
      return {
        header: null
      };
    }
  }
);
const PendingStack = createStackNavigator(
  {
    Home: PendingPage,
    Detail:
    {
      screen: DetailPage,
      navigationOptions: {
        header: null,
        tabBarVisible: false,
        tabBarOptions: false,
      },
    }

  }
  , {
    defaultNavigationOptions: () => {
      return {
        header: null
      };
    }
  }
);
PendingStack.navigationOptions = ({ navigation }) => {

  let tabBarVisible = true;

  let routeName = navigation.state.routes[navigation.state.index].routeName

  if (routeName == 'Detail') {
    tabBarVisible = false
  }

  return {
    tabBarVisible,
  }
}
ApprovedStack.navigationOptions = ({ navigation }) => {

  let tabBarVisible = true;

 
  let routeName = navigation.state.routes[navigation.state.index].routeName

  if (routeName == 'Detail') {
    tabBarVisible = false;
   
  }

  return {
    tabBarVisible,

  }
}

const DashboardTabNavigator = createMaterialTopTabNavigator(
  {
    PageHome: {
      screen: ProfileStack,
      navigationOptions: {
        header: null,
        tabBarLabel: 'Cá nhân',



      }

    },
    Approved: {
      screen: ApprovedStack,
      navigationOptions: {
        header: null,
        tabBarLabel: 'Đã duyệt',


      }
    },
    Pending: {
      screen: PendingStack,
      navigationOptions: {
        tabBarLabel: 'Chờ duyệt',

      }
    },
  },

  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#4877F8',
      inactiveTintColor: '#000',
      style: {
        backgroundColor: 'transparent',

      },
      labelStyle: {
        textAlign: 'center',

      },
      indicatorStyle: {
        borderBottomColor: '#4877F8',
        borderBottomWidth: 2,
      },
    },
  }
);
const AppContainer = createAppContainer(DashboardTabNavigator);



const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffc1c1',
  }
});