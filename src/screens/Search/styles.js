import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #9D40F2;
  align-items: center;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  margin-top: 35px;
  width: 380px;
`;

export const Search = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

export const SearchArea = styled.View`
  border-radius: 30px;
  height: 60px;
  background-color: #8910FF;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 30px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #ffffff;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;