import React from 'react';
import { NoResultText, NoResult } from './styles';
import NoData from '../../assets/no_data.svg';
export default ({text}) => {
  return (
    <NoResult>
      <NoResultText>{text}</NoResultText>
      <NoData width='106' height='106' fill='#333' />
    </NoResult>
  )
}