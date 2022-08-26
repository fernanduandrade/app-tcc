import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #9D40F2;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  margin-top: 10px;
`;

export const LocationArea = styled.View`
  border-radius: 30px;
  height: 60px;
  background-color: #8910FF;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 30px;
`;

export const LocationInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #ffffff;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;