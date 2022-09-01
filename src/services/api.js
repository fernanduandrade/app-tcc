import axios from 'axios';
import { PlaceApi } from './PlaceApi';
import { CategoryApi } from './CategoryApi';
import { REACT_APP_API_URI } from '@env';

const api = axios.create({
  baseURL: `${REACT_APP_API_URI}`,
  headers: { 
    'Content-Type': 'application/json',
  }
});

class Api {
  constructor() {
    this.Place = new PlaceApi(api, 'api/place');
    this.Category = new CategoryApi(api, 'api/category')
  }
}

const apiInstance = new Api();

export { apiInstance };