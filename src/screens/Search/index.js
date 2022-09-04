import React, { useState, useEffect } from 'react';
import { Container, Scroller, SearchArea, SearchInput, LoadingIcon, Search } from './styles';
import SearchIcon from '../../assets/search.svg';
import { useRoute } from '@react-navigation/native';
import { apiInstance } from '../../services/api';
import CardPlace from '../../components/CardPlace/index';

export default () => {

  const [locationText, setLocationText] = useState('');
  const [places, setPlaces] = useState([]);
  const route = useRoute();

  const [category, setCategory] = useState(route.params?.id);

  const getPlacesByCategory = async () => {
    const response = await apiInstance.Place.getByCategory(category);
    setPlaces(response.data);
  }
  useEffect(() => {
    category ? getPlacesByCategory() : null;
  }, []);

  const getFilteredPlaces = async () => {
    const response = await apiInstance.Place.getFiltered(locationText);
    setPlaces(response.data);
  }
  return (
    <Container>
      <SearchArea>
          <SearchInput
            value={locationText}
            onChangeText={text => setLocationText(text)}
            placeholder='Pesquise por algum local'
            placeholderTextColor='#ffffff'
          />
          <Search onPress={() => getFilteredPlaces()}>
            <SearchIcon width='26' height='26' fill='#ffffff' />
          </Search>
      </SearchArea>
      <Scroller>
        {places.map((place, index) => (
          <CardPlace data={place} key={index} />
        ))}
      </Scroller>
    </Container>
  )
}