import React, { useState} from 'react';
import { Container, Scroller, Header, HeaderTitle, SearchButton, LoadingIcon, ListArea, SugestionText } from './styles';
import { useNavigation } from '@react-navigation/native';
import { request, PERMISSIONS } from 'react-native-permissions';
import GeoLocation from 'react-native-geolocation-service';
import { Platform, RefreshControl } from 'react-native';
import CardPlace from '../../components/CardPlace/index';

import SearchIcon from '../../assets/search.svg';
import { apiInstance } from '../../services/api';

export default () => {
  
  const navigation = useNavigation();

  const [locationText, setLocationText] = useState('');
  const [coordinates, setCoordinates] = useState(null);
  const [loading, setLoading] = useState(false);
  const [places, setPlaces] = useState([]);

  const [refreshing, setRefreshing] = useState(false);

  const handleLocationFinder = async () => {
    setCoordinates(null);
    const result = await request(
      Platform.OS === 'ios' ?
        PERMISSIONS.IOS.LOCATION_WHEN_IN_USE :
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
    );
     
    if(result === 'granted') {
      setLoading(true);

      GeoLocation.getCurrentPosition((position) => {
        setCoordinates(position.coords);
      },
      (error) => {
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 });
    }

  };
  
  const getPlaces = async () => await apiInstance.Place.get();

  const onRefresh = async () => {
    setRefreshing(false);
    const response = await getPlaces();
    setPlaces(response.data);
  }

  return (
    <Container>
      <Scroller refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        <Header>
          <HeaderTitle numberOfLines={2}>
            Procure por um lugar em Juazeiro do Piauí
          </HeaderTitle>
          <SearchButton onPress={() => navigation.navigate('Search')}>
            <SearchIcon width='26' height='26' fill='#ffffff' />
          </SearchButton>
        </Header>

        {loading && <LoadingIcon size='large' color='#ffffff' />}

        <SugestionText>Sugestões</SugestionText>

        <ListArea>
        {places.map((place, index) => (
          <CardPlace data={place} key={index} />
        ))}
        </ListArea>

      </Scroller>
    </Container>
  )
}
