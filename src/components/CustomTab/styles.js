import styled from 'styled-components/native';

export const TabArea = styled.View`
  height: 60px;
  background-color: #ffffff;
  flex-direction: row;
`;

export const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TabItemCenter = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  justify-content: center;
  align-items: center;
  background-color: #4F40AF;
  margin-top: -20px;
`;