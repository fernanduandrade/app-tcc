import React from 'react'
import styled from 'styled-components/native'

import HomeIcon from '../assets/home.svg'
import FavoriteIcon from '../assets/favorite.svg'
import CategoriesIcon from '../assets/categories.svg'

const TabArea = styled.View`
  height: 60px;
  background-color: #7D11E5;
  flex-direction: row;
`

const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export default () => {
  return (
    <TabArea>
      <TabItem>
        <CategoriesIcon width='24' height='24' fill='#ffffff'/>
      </TabItem>
      <TabItem>
        <HomeIcon width='24' height='24' fill='#ffffff'/>
      </TabItem>
      <TabItem>
        <FavoriteIcon width='24' height='24' fill='#ffffff'/>
      </TabItem>
    </TabArea>
  )
}