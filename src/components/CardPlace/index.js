import React from 'react';
import { Card, PlaceImg, PlaceContent, PlaceTitle, PlaceButton, PlaceButtonText } from './styles'
import { useNavigation } from '@react-navigation/native';
import Stars from '../Stars/index';

export default ({data}) => {
  
  const { navigate } = useNavigation();
  
  const placeImgs = data.img_links.split(',');
  const placeImg = placeImgs[Math.floor(Math.random()*placeImgs.length)];

  const handleClick = () => {
    navigate('Place', {
      id: data.title,
      name: data.title,
      stars: data.start
    });
  }

  return(
    <Card onPress={() => handleClick()}>
      <PlaceImg source={{uri: placeImg}} />
      <PlaceContent>
        <PlaceTitle>{data.title}</PlaceTitle>
        <Stars stars={data.star} />
        <PlaceButton>
          <PlaceButtonText>Ver Local</PlaceButtonText>
        </PlaceButton>
      </PlaceContent>
    </Card>
  )
}