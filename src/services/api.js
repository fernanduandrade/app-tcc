import axios from 'axios';

const api = axios.create({
  baseURL: 'http://0.0.0.0:8000/',
  headers: { 'Content-Type': 'application/json' }
});

class Api {
  constructor() {
    this.Place = new PlaceApi(api, 'api/place');
    this.Category = new CategoryApi(api, 'api/category')
  }
}

const apiInstance = new Api();

export { apiInstance };