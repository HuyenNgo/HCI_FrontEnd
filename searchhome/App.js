import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './src/app/pages/home/HomePage'
import AppNavigation from "./src/app/main/AppNavigation";
import Location from './src/app/pages/signroom/location'
import Information from './src/app/pages/signroom/information'
import Confirm from './src/app/pages/signroom/confirm'
import ButtonNavigation from './src/app/main/ButtonNavigation'
import Utilities from './src/app/pages/signroom/utilities'
import DetailRoomPage from './src/app/pages/home/DetailRoomPage'
import FilterPage from './src/app/pages/roomates/filter'
export default function App() {
  return (
    // <View style={{flex: 1,flexDirection:'column'}}>
    //   <AppHeader style={{flex:1}} />
    //   <AppNavigation style={{flex:9}}/>
    // </View>
  
    
            <AppNavigation
          />
        //<FilterPage/>
    // < DetailRoomPage />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
