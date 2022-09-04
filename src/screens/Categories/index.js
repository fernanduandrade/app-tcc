import React, { useEffect, useState } from 'react'
import { Container, CategoryArea, CategoryText, Scroller, Category } from './styles'
import { apiInstance } from '../../services/api';
import { useNavigation } from '@react-navigation/native';

export default () => {
  
  const [categories, setCategories] = useState([]);

  const { navigate } = useNavigation();

  const handleClick = (id) => {
    navigate('Search', {
      id
    });
	}

	useEffect(() => {
		async function getCategories() {
      const response = await apiInstance.Category.get();
      setCategories(response.data);
    }

    getCategories();
  }, []);

  return (
    <Container>
      <Scroller>
        {categories.map((category, index) => (
          <Category key={index}  onPress={() => handleClick(category.id)}>
            <CategoryArea>
              <CategoryText>{category.category_name}</CategoryText>
            </CategoryArea>
          </Category>
        ))}
			</Scroller>
		</Container>
	)
}
