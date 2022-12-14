import React, { useState, useEffect, useContext } from 'react';
import { Container, Scroller, Header, HeaderTitle, SearchButton, LoadingIcon, ListArea, SugestionText } from './styles';
import { useNavigation } from '@react-navigation/native';
import { request, PERMISSIONS } from 'react-native-permissions';
import GeoLocation from 'react-native-geolocation-service';
import { Platform, RefreshControl } from 'react-native';
import CardPlace from '../../components/CardPlace/index';

import SearchIcon from '../../assets/search.svg';
import { apiInstance } from '../../services/api';
import { UserContext } from './../../contexts/UserContext';

export default () => {
  
  const navigation = useNavigation();
  const reducer = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [places, setPlaces] = useState([]);

  const [refreshing, setRefreshing] = useState(false);

  const handleLocationFinder = async () => {
    
    const result = await request(
      Platform.OS === 'ios' ?
        PERMISSIONS.IOS.LOCATION_WHEN_IN_USE :
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
    );
     
    if(result === 'granted') {

      GeoLocation.getCurrentPosition((position) => {
        reducer.dispatch({
          type: 'SET_COORDINATES',
          payload: position.coords,
        });
        setLoading(false);
      },
      (error) => {
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 });
    }

  };
  
  const getPlaces = async () => {
    setLoading(true);
    const { data } = await apiInstance.Place.get();
    data.length = 5;
    setPlaces(data);
    setLoading(false);
  }

  const onRefresh = async () => {
    await getPlaces();
  }

  useEffect(() => {
    getPlaces();
    handleLocationFinder();
  } , []);

  return (
    <Container>
      <Scroller refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        <Header>
          <HeaderTitle numberOfLines={2}>
            Procure por um lugar em Juazeiro do Piau??
          </HeaderTitle>
          <SearchButton onPress={() => navigation.navigate('Search')}>
            <SearchIcon width='26' height='26' fill='#9498AE' />
          </SearchButton>
        </Header>

        <SugestionText>Sugest??es ????</SugestionText>

        <ListArea>
        {loading && <LoadingIcon size='large' color='#ffffff' />}
        {places.map((place, index) => (
          <CardPlace data={place} key={index} />
        ))}
        </ListArea>

      </Scroller>
    </Container>
  )
}
