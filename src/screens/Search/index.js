import React, { useState, useEffect } from 'react';
import { Container, Scroller, SearchArea, SearchInput, LoadingIcon, Search } from './styles';
import SearchIcon from '../../assets/search.svg';
import { useRoute } from '@react-navigation/native';
import { apiInstance } from '../../services/api';
import CardPlace from '../../components/CardPlace/index';

export default () => {

  const [locationText, setLocationText] = useState('');
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);

  const route = useRoute();

  const [category, setCategory] = useState(route.params?.id);

  const getPlacesByCategory = async () => {
    setLoading(true);
    const { data } = await apiInstance.Place.getByCategory(category);
    setPlaces(data);
    setLoading(false);
  }
  
  const getFilteredPlaces = async () => {
    setLoading(true);
    setPlaces([]);
    const { data } = await apiInstance.Place.getFiltered(locationText);
    setPlaces(data);
    setLoading(false);
  }

  useEffect(() => {
    category ? getPlacesByCategory() : null;
  }, []);
  
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
        {loading && <LoadingIcon size='large' color='#ffffff' />}
        {places.map((place, index) => (
          <CardPlace data={place} key={index} />
        ))}
      </Scroller>
    </Container>
  )
}