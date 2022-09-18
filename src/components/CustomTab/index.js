import React from 'react';

import HomeIcon from '../../assets/home.svg';
import FavoriteIcon from '../../assets/favorite.svg';
import CategoriesIcon from '../../assets/categories.svg';

import { TabArea, TabItem, TabItemCenter } from './styles';

export default ({state, navigation}) => {
  
  const goTo = (screenName) => {
      navigation.navigate(screenName);
  }

  return (
    <TabArea>
      <TabItem onPress={() => goTo('Categories')}>
        <CategoriesIcon
          style={{opacity : state.index === 0 ? 1 : 0.5}}
          width='24' height='24' fill='#333'
        />
      </TabItem>
      <TabItemCenter onPress={() => goTo('Home')}>
        <HomeIcon
          width='32' height='32' fill='#ffffff'/
        >
      </TabItemCenter>
      <TabItem onPress={() => goTo('Favorites')}>
        <FavoriteIcon
          style={{opacity : state.index === 3 ? 1 : 0.5}}
          width='24' height='24' fill='#333'
        />
      </TabItem>
    </TabArea>
  )
}