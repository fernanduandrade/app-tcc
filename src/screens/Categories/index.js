import React, { useEffect, useState } from 'react'
import { Container, CategoryArea, CategoryText, Scroller, Category } from './styles'
import { apiInstance } from '../../services/api';

export default () => {
  
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    async function getCategories() {
      const response = await apiInstance.Category.get();
      console.log(response);
      setCategories(response.data);
    }

    getCategories();
  } ,[]);

  return (
    <Container>
      <Scroller>
        {categories.map((category, index) => (
          <Category key={index} >
            <CategoryArea>
              <CategoryText>{category.category_name}</CategoryText>
            </CategoryArea>
          </Category>
        ))}
      </Scroller>
    </Container>
  )
}