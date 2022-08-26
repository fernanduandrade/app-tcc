import React, { useState, useEffect } from 'react';
import { Container, Scroller, SearchArea, SearchInput, LoadingIcon, Search } from './styles';
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
          <Search>
            <SearchIcon width='26' height='26' fill='#ffffff' />
          </Search>
        </SearchArea>
      <Scroller>

      </Scroller>
    </Container>
  )
}