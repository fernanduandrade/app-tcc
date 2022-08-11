import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Preload from '../screens/PreLoad/index'
import Home from '../screens/Home/index'
const { Navigator, Screen } = createStackNavigator()

export default () => (
  <Navigator screenOptions={{
      headerShown: false,
    }}
    initialRouteName='PreLoad'
  >
    <Screen name='PreLoad' component={Preload}/>
    <Screen name='Home' component={Home}/>
  </Navigator>
)