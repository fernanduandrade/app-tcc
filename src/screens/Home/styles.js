import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #9D40F2;
  flex: 1;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  padding: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  width: 250px;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

export const SearchButton = styled.TouchableOpacity`
  width: 26px;
  height: 26px;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;

export const ListArea = styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const SugestionText = styled.Text`
  margin-top: 14px;
  width: 250px;
  font-size: 28px;
  font-weight: bold;
  color: #fff;
`;