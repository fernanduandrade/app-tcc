import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/index';
import Favorites from '../screens/Favorites/index';
import Categories from '../screens/Categories/index';
import Search from '../screens/Search/index';

import CustomTab from '../components/CustomTabs';

const { Navigator, Screen } = createBottomTabNavigator();

export default () => (
  <Navigator
    screenOptions={{
      headerShown: false
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