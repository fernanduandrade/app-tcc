import React, { useEffect, useState } from 'react';
import Swiper from 'react-native-swiper';
import { Container, FakeSwiper, PlaceBody, PlaceInfo, Scroller, BackButton, PlaceMap, SwiperDot, SwiperItem, SwiperImg, PlaceInfoName, PlaceFavoriteIcon, PlaceImg, PlaceInfoContent } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import FavoriteIcon from '../../assets/favorite.svg';
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
  const [loading, setLoading] = useState(false);

  // chamar api
  // useEffect(() => {
  // }, []);
  
  //const getPlaceById 
  
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
          <PlaceFavoriteIcon>
          <FavoriteIcon width='24' height='24' fill='#000000'/>
        </PlaceFavoriteIcon>
        </PlaceInfo>
      </PlaceBody>
    </Scroller>
    <BackButton onPress={() => goBack()}>
      <BackIcon width='28' height='28' fill='#ffffff'/>
    </BackButton>
  </Container>
)}