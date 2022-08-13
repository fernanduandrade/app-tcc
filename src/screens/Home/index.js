import React, { useState} from 'react';
import { Container, Scroller, Header, HeaderTitle, SearchButton,LocationArea, LocationInput, LocationFinder, LoadingIcon, ListArea } from './styles';
import { useNavigation } from '@react-navigation/native';
import { request, PERMISSIONS } from 'react-native-permissions';
import GeoLocation from '@react-native-community/geolocation';
import { Platform } from 'react-native';
import CardPlace from '../../components/CardPlace/index';

import SearchIcon from '../../assets/search.svg';
import LocationIcon from '../../assets/my_location.svg';

export default () => {
  
  const navigation = useNavigation();

  const [locationText, setLocationText] = useState('');
  const [coordinates, setCoordinates] = useState(null);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  const handleLocationFinder = async () => {
    setCoordinates(null);
    const result = await request(
      Platform.OS === 'ios' ?
        PERMISSIONS.IOS.LOCATION_WHEN_IN_USE :
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
    );

    console.log(result);
    
    if(result === 'granted') {
      setLoading(true);
      setLocationText('');
      setList([]);

      GeoLocation.getCurrentPosition((info) => {
        console.log(info)
        setCoordinates(info.coords);

        // getPlaces();
      });
    }
  };

  return (
    <Container>
      <Scroller>
        <Header>
          <HeaderTitle numberOfLines={2}>
            Procure por um lugar em Juazeiro do Piauí
          </HeaderTitle>
          <SearchButton onPress={() => navigation.navigate('Search')}>
            <SearchIcon width='26' height='26' fill='#ffffff' />
          </SearchButton>
        </Header>

        <LocationArea>
          <LocationInput
            value={locationText}
            onChangeText={text => setLocationText(text)}
            placeholder='Onde você está'
            placeholderTextColor='#ffffff'
          />
          <LocationFinder onPress={handleLocationFinder}>
            <LocationIcon width='24' height='24' fill='#ffffff' />
          </LocationFinder>
        </LocationArea>

        {loading && <LoadingIcon size='large' color='#ffffff' />}

        <ListArea>
          <CardPlace>

          </CardPlace>
        </ListArea>

      </Scroller>
    </Container>
  )
}
