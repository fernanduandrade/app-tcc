import React, { useEffect, useState } from 'react';
import Swiper from 'react-native-swiper';
import { Container, FakeSwiper, PlaceBody, PlaceInfo, Scroller, BackButton, PlaceMap, SwiperDot, SwiperItem, SwiperImg, PlaceInfoName, PlaceFavoriteIcon, PlaceImg, PlaceInfoContent, PlaceInfoDescription } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import MapView from 'react-native-maps';
import FavoriteIcon from '../../assets/favorite.svg';
import FavoriteFullIcon from '../../assets/favorite_full.svg';
import BackIcon from '../../assets/back.svg';
import Stars from '../../components/Stars/index';

export default () => {
  const { goBack } = useNavigation();
  const route = useRoute();

  const [placeInfo, setPlaceInfo] = useState({
    id: route.params.id,
    name: route.params.name,
    stars: route.params.stars
  });
  const [favorited, setFavorited] = useState(false);
  const [loading, setLoading] = useState(false);

  // chamar api
  // useEffect(() => {
  // }, []);
  
  //const getPlaceById 
  const handleFavoriteClick = () => setFavorited(!favorited);
  const imgTest = ['https://www.conhecaopiaui.com/images/posts/por-que-voce-deve-conhecer-a-pedra-do-castelo_8456EhkLkD.jpeg', 'http://senadorciro.com.br/wp-content/uploads/2019/11/WhatsApp-Image-2019-11-24-at-17.20.03.jpeg', 'http://senadorciro.com.br/wp-content/uploads/2019/11/WhatsApp-Image-2019-11-24-at-14.17.38.jpeg'];

  return (
  <Container>
    <Scroller>
      {imgTest.length > 0 ?
        <Swiper
          style={{height: 240}}
          dot={<SwiperDot color={'#ffffff'} />}
          activeDot={<SwiperDot color={'#55E1F0'} /> }
          paginationStyle={{top: 15, right: 15, bottom: null, left: null}}
          autoplay={false}
        >
          {imgTest.map((img, index) =>(
            <SwiperItem key={index}>
              <SwiperImg source={{uri: img}} resizeMode='cover'/>
            </SwiperItem>
          ))}
        </Swiper> : 
        <FakeSwiper></FakeSwiper>
      }
      <PlaceBody>
        <PlaceInfo>
          <PlaceImg source={{uri: imgTest[0]}}/>
          
          <PlaceInfoContent>
            <PlaceInfoName>Pedra do Castelo</PlaceInfoName>
            <Stars stars={3.7} />
          </PlaceInfoContent>
          <PlaceFavoriteIcon onPress={() => handleFavoriteClick()}>
            {favorited ?
            <FavoriteFullIcon width='24' height='24' fill='#ff0000'/> :
            <FavoriteIcon width='24' height='24' fill='#ff0000'/>
            }
          
        </PlaceFavoriteIcon>
        </PlaceInfo>
        <PlaceInfoDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </PlaceInfoDescription>
        <PlaceMap>
          <MapView
            style={{width: 360, height: 280}}
            initialRegion={{
              latitude: -5.178315972153446,
              longitude: -41.69939038640912,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </PlaceMap>
      </PlaceBody>
    </Scroller>
    <BackButton onPress={() => goBack()}>
      <BackIcon width='28' height='28' fill='#ffffff'/>
    </BackButton>
  </Container>
)}