import React from 'react';
import { Card, PlaceImg, PlaceContent, PlaceTitle, PlaceButton, PlaceButtonText } from './styles'
import { useNavigation } from '@react-navigation/native';
import Stars from '../Stars/index';
import { randomImg, splitImgs } from '../../utils/handleImgs';

export default ({data}) => {
  
  const { navigate } = useNavigation();
  
  const imgs = splitImgs(data.img_links);
  const placeImg = randomImg(imgs);

  const handleClick = () => {
    navigate('Place', data);
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