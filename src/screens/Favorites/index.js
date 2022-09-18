import React, { useState, useEffect } from 'react';
import { Container, Scroller, ListCard } from './styles';
import CardPlace from '../../components/CardPlace/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NoResults from '../../components/NoResults';
export default () => {

  const [places, setPlaces] = useState([]);
  useEffect(() => {
    async function fetchLocalData() {
      const localPlaces = await AsyncStorage.getItem('places');
      const json = JSON.parse(localPlaces);
      setPlaces(json);
    }
    fetchLocalData();
  }, []);
  
  return (
    <Container>
      <Scroller>
        <ListCard>
          { places.length > 0 ?
            places.map((place, index) => (
            <CardPlace data={place} key={index} />
            )) : 
            <NoResults text="não há favoritos"/>
          }
        </ListCard>
      </Scroller>
    </Container>
  )
}