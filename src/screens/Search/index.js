import React, { useState, useEffect } from 'react';
import { Container, Scroller, SearchArea, SearchInput, LoadingIcon, Search } from './styles';
import SearchIcon from '../../assets/search.svg';
import { useRoute } from '@react-navigation/native';
import { apiInstance } from '../../services/api';
import CardPlace from '../../components/CardPlace/index';
import NoResults from '../../components/NoResults';
export default () => {

  const [locationText, setLocationText] = useState('');
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasNoResult, setHasNoResults] = useState(false);

  const route = useRoute();

  const [category, setCategory] = useState(route.params?.id);

  const getPlacesByCategory = async () => {
    setLoading(true);
    setHasNoResults(false);
    const { data } = await apiInstance.Place.getByCategory(category);
    data.length > 0 ? setPlaces(data) : setHasNoResults(true);
    setLoading(false);
  }
  
  const getFilteredPlaces = async () => {
    setLoading(true);
    setHasNoResults(false);
    setPlaces([]);
    const { data } = await apiInstance.Place.getFiltered(locationText);
    data.length > 0 ? setPlaces(data) : setHasNoResults(true);
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
            placeholderTextColor='#9498AE'
          />
          <Search onPress={() => getFilteredPlaces()}>
            <SearchIcon width='26' height='26' fill='#9498AE' />
          </Search>
      </SearchArea>
      <Scroller>
        {loading && <LoadingIcon size='large' color='#9498AE' />}
        {places.map((place, index) => (
            <CardPlace data={place} key={index} />
        ))
        }
        {hasNoResult && <NoResults text="não houve resultados"/>}
      </Scroller>
    </Container>
  )
}