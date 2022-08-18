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
  background-color: ${props => props.color};
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
  height: 130px;
  background-color: #55E1F0;
`;

export const PlaceBody = styled.View`
  background-color: #ffffff;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  margin-top: -50px;
  min-height: 400px;
`;

export const PlaceMap = styled.View`
  margin-top: 30px;
  margin-left: 25px;
  width: 360px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08);
  border-radius: 7px;
  overflow: hidden;
  
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

export const PlaceInfoDescription = styled.Text`
  align-self: center;
  color: #000000;
  font-size: 14px;
  margin-top: 20px;
  width: 360px;
`;

export const PlaceFavoriteIcon = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  border: 2px solid #999999;
  border-radius: 20px;
  justify-content: center;
  margin-left: 20px;
  margin-top: 10px;
  margin-right: 30px;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  top: 10px;
  z-index: 10;
`;