import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/index';
import Favorites from '../screens/Favorites/index';
import Categories from '../screens/Categories/index';
import Search from '../screens/Search/index';

import CustomTab from '../components/CustomTab/index';

const { Navigator, Screen } = createBottomTabNavigator();

export default () => (
  <Navigator
    screenOptions={{
      headerShown: false,
      unmountOnBlur: true
    }}
    initialRouteName='Home'
    tabBar={props=><CustomTab {...props}/>}
  >
    <Screen name='Categories' component={Categories}/>
    <Screen name='Search' component={Search}/>
    <Screen name='Home' component={Home}/>
    <Screen name='Favorites' component={Favorites}/>
  </Navigator>
)