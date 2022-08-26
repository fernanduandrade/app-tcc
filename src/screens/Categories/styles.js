import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #9D40F2;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  margin-top: 10px;
`;

export const Category = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;  
`;

export const CategoryArea = styled.View`
  background-color: #ffffff;
  width: 380px;
  border-radius: 10px;
  padding: 18px;
  align-items: center;
  margin-bottom: 13px;
`;

export const CategoryText = styled.Text`
  font-size: 18px;
  color: #000;
`;