import React, { useEffect } from 'react'
import { Container, LoadingIcon  } from './styles'
import JuaLogo from '../../assets/jua-logo.svg'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

export default () => {
  
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token')
      if(!token) {
        setTimeout(() => {
          navigation.navigate('MainTab')
        }, 5000)
      }
    }
    checkToken();
  }, [])
  
  return (
    <Container>
      <JuaLogo height='160' width='100%' />
      <LoadingIcon size='large' color='#fff'/>
    </Container>
  )
}
