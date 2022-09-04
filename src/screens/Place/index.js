import React, { useEffect, useState } from 'react';
import Swiper from 'react-native-swiper';
import { Container, FakeSwiper, PlaceBody, PlaceInfo, Scroller, BackButton, PlaceMap, SwiperDot, SwiperItem, SwiperImg, PlaceInfoName, PlaceFavoriteIcon, PlaceImg, PlaceInfoContent, PlaceInfoDescription, PlaceMarkerImg, ContactButton, ContactText, Contact } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import FavoriteIcon from '../../assets/favorite.svg';
import FavoriteFullIcon from '../../assets/favorite_full.svg';
import BackIcon from '../../assets/back.svg';
import WhatAppIcon from '../../assets/whatapp-icon.svg';
import Stars from '../../components/Stars/index';
import { apiInstance } from '../../services/api';
import { randomImg, splitImgs } from '../../utils/handleImgs';
import formatCoordinates from '../../utils/formatCoordinates';

export default () => {
  const { goBack } = useNavigation();
  const route = useRoute();

  const [placeId, setPlaceId] = useState(route.params.id);
  const [favorited, setFavorited] = useState(false);
  const [place, setPlace] = useState();
  const [coords, setCoords] = useState();
  const [imgs, setImgs] = useState();
  const [placeImg, setPlaceImg] = useState();
  
  const [loading, setLoading] = useState(false);
  const teste = [
    {lat: -5.169772807893075, long: -41.703290520962426},
    {lat: -5.201745722596515, long: -41.6874175980174, img: 'https://www.conhecaopiaui.com/images/posts/por-que-voce-deve-conhecer-a-pedra-do-castelo_8456EhkLkD.jpeg'},
  ];
  // chamar api

  useEffect(() => {
    const response = apiInstance.Place.getById(placeId);
    setPlace(response.data);
    setCoords(formatCoordinates(response.data.coordinate));
    setImgs(splitImgs(response.data.imgs_links));
    setPlaceImg(randomImg(imgs));
  }, []);
  
  const handleFavoriteClick = () => setFavorited(!favorited);
  const imgTest = ['https://www.conhecaopiaui.com/images/posts/por-que-voce-deve-conhecer-a-pedra-do-castelo_8456EhkLkD.jpeg', 'http://senadorciro.com.br/wp-content/uploads/2019/11/WhatsApp-Image-2019-11-24-at-17.20.03.jpeg', 'http://senadorciro.com.br/wp-content/uploads/2019/11/WhatsApp-Image-2019-11-24-at-14.17.38.jpeg'];

  return (
  <Container>
    <Scroller>
      {imgs.length > 0 ?
        <Swiper
          style={{height: 240}}
          dot={<SwiperDot color={'#ffffff'} />}
          activeDot={<SwiperDot color={'#55E1F0'} /> }
          paginationStyle={{top: 15, right: 15, bottom: null, left: null}}
          autoplay={false}
        >
          {imgs.map((img, index) =>(
            <SwiperItem key={index}>
              <SwiperImg source={{uri: img}} resizeMode='cover'/>
            </SwiperItem>
          ))}
        </Swiper> : 
        <FakeSwiper></FakeSwiper>
      }
      <PlaceBody>
        <PlaceInfo>
          <PlaceImg source={{uri: placeImg}}/>
          
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
                longitude: -41.703290520962426,
                latitude: -5.169772807893075, 
              }}
            >
              <PlaceMarkerImg source={require('../../assets/red-pin.png')}/>
            </Marker>
            <Marker
                coordinate={{ 
                  longitude: coords.longitude,
                  latitude: coords.latitude, 
                }}
            >
              <PlaceMarkerImg img={placeImg} source={placeImg}/>
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