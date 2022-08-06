import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default () => (
  <Stack.Navigator>
    <Stack.Screen name='PreLoad' component={Preload}/>
  </Stack.Navigator>
)