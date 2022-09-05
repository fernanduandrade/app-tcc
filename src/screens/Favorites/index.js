import React, { useState, useEffect } from 'react';
import { Container, Scroller, ListCard } from './styles';
import CardPlace from '../../components/CardPlace/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default () => {

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    async function fetchLocalData() {
      const localPlaces = await AsyncStorage.getItem('places');
      const json = JSON.parse(localPlaces);
      setPlaces(json);
      console.log(typeof json);
    }
    fetchLocalData();
  }, []);
  
  return (
    <Container>
      <Scroller>
        <ListCard>
          {places.map((place, index) => (
            <CardPlace data={place} key={index} />
          ))}
        </ListCard>
      </Scroller>
    </Container>
  )
}