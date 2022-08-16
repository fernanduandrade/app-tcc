import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
`;

export const SwipeDot = styled.View`
  width: 10px;
  height: 10px;
  background-color: #ffffff;
  border-radius: 5px;
  margin: 3px;
`;

export const SwipeDotActive = styled.View`
  width: 10px;
  height: 10px;
  background-color: blue;
  border-radius: 5px;
  margin: 3px;
`;

export const SwipeItem = styled.View`
  flex: 1;
  background-color: #9D40F2;
`;

export const SwipeImg = styled.Image`
  width: 100%;
  height: 240px;
`;

export const FakeSwiper = styled.View`
`;

export const PageBody = styled.View`
  background-color: #ffffff;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  margin-top: -50px;
  min-height: 400px;
`;

export const PageInfo = styled.View`
`;

export const PageMap = styled.View`
`;
