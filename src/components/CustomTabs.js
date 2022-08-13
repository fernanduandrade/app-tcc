import React from 'react'
import styled from 'styled-components/native'

import HomeIcon from '../assets/home.svg'
import FavoriteIcon from '../assets/favorite.svg'
import CategoriesIcon from '../assets/categories.svg'

const TabArea = styled.View`
  height: 60px;
  background-color: #8910FF;
  flex-direction: row;
`

const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const TabItemCenter = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 3px solid #8910FF;
  margin-top: -20px;
`

export default ({state, navigation}) => {
  
  const goTo = (screenName) => {
      navigation.navigate(screenName);
  }

  return (
    <TabArea>
      <TabItem onPress={() => goTo('Categories')}>
        <CategoriesIcon
          style={{opacity : state.index === 0 ? 1 : 0.5}}
          width='24' height='24' fill='#ffffff'
        />
      </TabItem>
      <TabItemCenter onPress={() => goTo('Home')}>
        <HomeIcon
          width='32' height='32' fill='#7D11E5'/
        >
      </TabItemCenter>
      <TabItem onPress={() => goTo('Favorites')}>
        <FavoriteIcon
          style={{opacity : state.index === 2 ? 1 : 0.5}}
          width='24' height='24' fill='#ffffff'
        />
      </TabItem>
    </TabArea>
  )
}