import React from 'react';
import { Card, PlaceImg, PlaceContent, PlaceTitle, PlaceButton, PlaceButtonText } from './styles'
import { useNavigation } from '@react-navigation/native';
import Stars from '../Stars/index';

export default ({data}) => {
  
  const { navigate } = useNavigation();
  
  const handleClick = () => {
    navigate('Place', data);
  }

  return(
    <Card onPress={() => handleClick()}>
      <PlaceImg source={{uri: data.img ? data.img : data.img_links.split(',')[0]}} />
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