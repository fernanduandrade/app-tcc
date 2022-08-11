import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home/index'
import Favorites from '../screens/Favorites/index'
import Categories from '../screens/Categories/index'

const Tab = createBottomTabNavigator()

export default () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false
    }}
    initialRouteName='Home'
  >
    <Tab.Screen name='Categories' component={Categories}/>
    <Tab.Screen name='Home' component={Home}/>
    <Tab.Screen name='Favorites' component={Favorites}/>
  </Tab.Navigator>
)