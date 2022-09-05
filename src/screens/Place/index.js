import React, { useState, useContext } from 'react';
import Swiper from 'react-native-swiper';
import { Container, FakeSwiper, PlaceBody, PlaceInfo, Scroller, BackButton, PlaceMap, SwiperDot, SwiperItem, SwiperImg, PlaceInfoName, PlaceFavoriteIcon, PlaceImg, PlaceInfoContent, PlaceInfoDescription, PlaceMarkerImg, ContactButton, ContactText, Contact } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import FavoriteIcon from '../../assets/favorite.svg';
import FavoriteFullIcon from '../../assets/favorite_full.svg';
import BackIcon from '../../assets/back.svg';
import WhatAppIcon from '../../assets/whatapp-icon.svg';
import Stars from '../../components/Stars/index';
import { randomImg } from '../../utils/handleImgs';
import formatCoordinates from '../../utils/formatCoordinates';
import { UserContext } from './../../contexts/UserContext';
export default () => {

  const { goBack } = useNavigation();
  const route = useRoute();
  const [favorited, setFavorited] = useState(false);
  const [place, setPlace] = useState({
    id: route.params.id,
    description: route.params.description,
    img_links: route.params.img_links.split(','),
    img: randomImg(route.params.img_links.split(',')),
    star: route.params.star,
    title: route.params.title,
    coords: formatCoordinates(route.params.coordinate),
  });
  const reducer = useContext(UserContext);

  const handleFavoriteClick = () => setFavorited(!favorited);

  return (
    <Container>
      <Scroller>
        {place.img_links.length > 0 ?
          <Swiper
            style={{height: 240}}
            dot={<SwiperDot color={'#ffffff'} />}
            activeDot={<SwiperDot color={'#55E1F0'} /> }
            paginationStyle={{top: 15, right: 15, bottom: null, left: null}}
            autoplay={false}
          >
            {place.img_links.map((img, index) =>(
              <SwiperItem key={index}>
                <SwiperImg source={{uri: img}} resizeMode='cover'/>
              </SwiperItem>
            ))}
          </Swiper> : 
          <FakeSwiper></FakeSwiper>
        }
        <PlaceBody>
          <PlaceInfo>
            <PlaceImg source={{uri: place.img}}/>
            
            <PlaceInfoContent>
              <PlaceInfoName>{place.title}</PlaceInfoName>
              <Stars stars={place.star} />
            </PlaceInfoContent>
            <PlaceFavoriteIcon onPress={() => handleFavoriteClick()}>
              {favorited ?
              <FavoriteFullIcon width='24' height='24' fill='#ff0000'/> :
              <FavoriteIcon width='24' height='24' fill='#ff0000'/>
              }
            
          </PlaceFavoriteIcon>
          </PlaceInfo>
          <PlaceInfoDescription>
              {place.description}
          </PlaceInfoDescription>
          <Contact>
            <ContactButton>
              <WhatAppIcon width='15' height='15' fill='#ffffff' />
              <ContactText>Whatapp</ContactText>
            </ContactButton>
          </Contact>
          <PlaceMap>
            <MapView
              style={{width: 360, height: 280}}
              initialRegion={{
                latitude: -5.178315972153446,
                longitude: -41.69939038640912,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker
                coordinate={{ 
                  longitude: reducer.state.coordinates.longitude,
                  latitude: reducer.state.coordinates.latitude, 
                }}
              >
                <PlaceMarkerImg source={require('../../assets/red-pin.png')}/>
              </Marker>
              <Marker
                  coordinate={{ 
                    longitude: place.coords.longitude,
                    latitude: place.coords.latitude, 
                  }}
              >
                <PlaceMarkerImg img={place.img} source={{ uri: place.img}}/>
              </Marker>
            </MapView>
          </PlaceMap>
        </PlaceBody>
      </Scroller>
      <BackButton onPress={() => goBack()}>
        <BackIcon width='28' height='28' fill='#ffffff'/>
      </BackButton>
    </Container>
)}