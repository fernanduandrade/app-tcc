import React from 'react';
import { Card, PlaceImg, PlaceContent, PlaceTitle, PlaceButton, PlaceButtonText } from './styles'
import { useNavigation } from '@react-navigation/native';
import Stars from '../Stars/index';

export default ({data}) => {
  
  const { navigate } = useNavigation();

  const handleClick = () => {
    navigate('Place', {
      id: 10,
      name: 'teste',
      stars: 5
    });
  }

  return(
    <Card onPress={() => handleClick()}>
      <PlaceImg source={{uri: 'https://static.wikia.nocookie.net/world-war-fan-fiction-series/images/e/ea/Natsu_Dragneel.png/revision/latest/scale-to-width-down/250?cb=20170802122259'}} />
      <PlaceContent>
        <PlaceTitle>teste</PlaceTitle>
        <Stars />

        <PlaceButton>
          <PlaceButtonText>Ver Local</PlaceButtonText>
        </PlaceButton>
      </PlaceContent>
    </Card>
  )
}