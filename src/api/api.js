import { BaseApi } from "./baseApi";
import axios from 'axios';

class PlaceApi {
  constructor(axios, baseAddress) {
    this.#_axios = axios;
    this.#_baseAddress = baseAddress;
    this.#_baseApi = new BaseApi(axios, baseAddress);
  }

  get = async () => await this.#_baseApi.get();

  getFiltered = async (search = null) => {
    const filterUrl = `${this.#_baseAdddress}/?search=${search}`;
    return  this.#_axios.get(filterUrl)
  }

  getById = async (placeId) => {
    const filterUrl = `${this.#_baseAdddress}/${placeId}`;
    return await this.#_axios.get(filterUrl);
  }
}

class CategoryApi {
  constructor(axios, baseAddress) {
    this.#_axios = axios;
    this.#_baseAddress = baseAddress;
    this.#_baseApi = new BaseApi(axios, baseAddress);
  }

  get = async () => await this.#_baseApi.get();
}

const api = axios.create({
  baseURL: 'http://0.0.0.0:8000/',
  headers: { 'Content-Type': 'application/json' }
});

class Api {
  constructor() {
    this.Place = new PlaceApi(api, 'api/place');
    this.Place = new CategoryApi(api, 'api/category')
  }
}

const apiInstance = new Api();

export { apiInstance };