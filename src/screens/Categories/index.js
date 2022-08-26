import React from 'react'
import { Container, CategoryArea, CategoryText, Scroller, Category } from './styles'

export default () => {
  return (
    <Container>
      <Scroller>
        <Category>
          <CategoryArea>
            <CategoryText>Restaurantes</CategoryText>
          </CategoryArea>
        </Category>
        <Category>
          <CategoryArea>
            <CategoryText>Eventos</CategoryText>
          </CategoryArea>
        </Category>
        <Category>
          <CategoryArea>
            <CategoryText>Bares</CategoryText>
          </CategoryArea>
        </Category>
        <Category>
          <CategoryArea>
            <CategoryText>Pontos turisticos</CategoryText>
          </CategoryArea>
        </Category>
      </Scroller>
    </Container>
  )
}