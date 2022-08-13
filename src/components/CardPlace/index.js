import React from 'react';
import { Card, PlaceImg, PlaceContent, PlaceTitle, PlaceButton, PlaceButtonText } from './styles'

export default ({data}) => {
  return(
    <Card>
      <PlaceImg source={{uri: 'https://static.wikia.nocookie.net/world-war-fan-fiction-series/images/e/ea/Natsu_Dragneel.png/revision/latest/scale-to-width-down/250?cb=20170802122259'}} />
      <PlaceContent>
        <PlaceTitle>teste</PlaceTitle>
        <PlaceButton>
          <PlaceButtonText>Ver Local</PlaceButtonText>
        </PlaceButton>
      </PlaceContent>
    </Card>
  )
}