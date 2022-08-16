import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
`;

export const SwiperDot = styled.View`
  width: 10px;
  height: 10px;
  background-color: #ffffff;
  border-radius: 5px;
  margin: 3px;
`;

export const SwiperDotActive = styled.View`
  width: 10px;
  height: 10px;
  background-color: blue;
  border-radius: 5px;
  margin: 3px;
`;

export const SwiperItem = styled.View`
  flex: 1;
  background-color: #9D40F2;
`;

export const SwiperImg = styled.Image`
  width: 100%;
  height: 240px;
`;

export const FakeSwiper = styled.View`
`;

export const PlaceBody = styled.View`
  background-color: #ffffff;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  margin-top: -50px;
  min-height: 400px;
`;

export const PlaceMap = styled.View`
`;

export const PlaceInfo = styled.View`
  flex-direction: row;
  margin-top: -30px;
`;

export const PlaceInfoContent = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const PlaceImg = styled.Image`
  width: 110px;
  height: 110px;
  border-radius: 20px;
  margin-left: 30px;
  margin-right: 20px;
  border-width: 4px;
  border-color: #ffffff;
`;

export const PlaceInfoName = styled.Text`
  color: #000000;
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const PlaceFavoriteIcon = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  border: 2px solid #999999;
  border-radius: 20px;
  justify-content: center;
  margin-left: 20px;
  margin-top: 20px;
  margin-right: 20px;
  align-items: center;
`;