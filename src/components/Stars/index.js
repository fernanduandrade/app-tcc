import React from 'react';
import { StarArea, StarView } from './styles';

import StarEmpty from '../../assets/star_empty.svg';
import StarHalf from '../../assets/star_half.svg';
import StarFull from '../../assets/star.svg';

export default ({stars, showNumber}) => {
  
  let entries = [0, 0, 0, 0, 0];
  
  const floor = Math.floor(stars);
  const left = stars - floor;

  for(var i = 0; i < floor ; i++) {
    entries[i] = 2;
  }
  if(left > 0) entries[i] =1;
  

  return (
    <StarArea>
      {entries.map((entrie, index) => (
        <StarView key={index}>
          {entrie === 0 && <StarEmpty width='18' height='18' fill='#ff9200' />}
          {entrie === 1 && <StarHalf width='18' height='18' fill='#ff9200' />}
          {entrie === 2 && <StarFull width='18' height='18' fill='#ff9200' />}
        </StarView>
      ))}
    </StarArea>
  )
}