import styled from 'styled-components/native';

export const Card = styled.TouchableOpacity`
  background-color: #ffffff;
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 15px;
  flex-direction: row;
`;

export const PlaceImg = styled.Image`
  width: 88px;
  height: 88px;
  border-radius: 20px;
`;

export const PlaceContent = styled.View`
  margin-left: 20px;
  justify-content: space-between;
`;

export const PlaceTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #413E53;
  font-weight: 400;
`;

export const PlaceButton = styled.View`
  width: 85px;
  height: 26px;
  border-radius: 10px;
  background-color: #7D11E5;
  justify-content: center;
  align-items: center;
`;

export const PlaceButtonText = styled.Text`
  font-size: 12px;
  color: #ffffff;
  font-weight: bold;
`;