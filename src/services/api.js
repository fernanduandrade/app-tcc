import axios from 'axios';
import { PlaceApi } from './PlaceApi';
import { CategoryApi } from './CategoryApi';

const api = axios.create({
  baseURL: 'http://ec2-52-90-52-49.compute-1.amazonaws.com/',
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