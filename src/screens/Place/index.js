import React, { useEffect, useState } from 'react';
import Swiper from 'react-native-swiper';
import { Container, FakeSwiper, PageBody, PageInfo, Scroller, PlaceMap, SwipeDot, SwipeDotActive, SwipeItem, SwipeImg } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';

export default () => {
  const { navigate } = useNavigation();
  const route = useRoute();

  const [placeInfo, setPlaceInfo] = useState({
    id: route.params.id,
    name: route.params.name,
    stars: route.params.stars
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // get place by id e depois setPlaceInfo
  }, []);
  //const getPlaceById 
  const imgTest = ['https://www.conhecaopiaui.com/images/posts/por-que-voce-deve-conhecer-a-pedra-do-castelo_8456EhkLkD.jpeg', 'http://senadorciro.com.br/wp-content/uploads/2019/11/WhatsApp-Image-2019-11-24-at-17.20.03.jpeg', 'http://senadorciro.com.br/wp-content/uploads/2019/11/WhatsApp-Image-2019-11-24-at-14.17.38.jpeg'];
  
  return (
  <Container>
    <Scroller>
      {imgTest.length > 0 ?
        <Swiper
          style={{height: 240}}
          dot={<SwipeDot />}
          activeDot={<SwipeDotActive /> }
          paginationStyle={{top: 15, right: 15, bottom: null, left: null}}
          autoplay={false}
        >
          {imgTest.map((img, index) =>(
            <SwipeItem key={index}>
              <SwipeImg source={{uri: img}} resizeMode='cover'/>
            </SwipeItem>
          ))}
        </Swiper> : 
        <FakeSwiper></FakeSwiper>
      }
      <PageBody>
        {/* chamar o mapa aqui */}
        <PageInfo>

        </PageInfo>
        <PlaceMap>

        </PlaceMap>
      </PageBody>
    </Scroller>
  </Container>
)}