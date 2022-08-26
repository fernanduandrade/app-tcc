import React, { useState, useEffect } from 'react';
import { Container, Scroller, SearchArea, SearchInput, LoadingIcon } from './styles';
import SearchIcon from '../../assets/search.svg';

export default () => {

  const [locationText, setLocationText] = useState('');

  return (
    <Container>
      <SearchArea>
          <SearchInput
            value={locationText}
            onChangeText={text => setLocationText(text)}
            placeholder='Pesquise por algum local'
            placeholderTextColor='#ffffff'
          />
          <SearchIcon width='26' height='26' fill='#ffffff' />
        </SearchArea>
      <Scroller>

      </Scroller>
    </Container>
  )
}