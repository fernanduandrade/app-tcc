import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Preload from '../screens/PreLoad/index'

import MainTab from '../stacks/MainTab/'

const { Navigator, Screen } = createStackNavigator()

export default () => (
  <Navigator screenOptions={{
      headerShown: false,
    }}
    initialRouteName='PreLoad'
  >
    <Screen name='PreLoad' component={Preload}/>
    <Screen name='MainTab' component={MainTab}/>
  </Navigator>
)