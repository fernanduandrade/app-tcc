import { BaseApi } from "./BaseApi";

class PlaceApi extends BaseApi {
  constructor(axios, baseAddress) {
    super(axios, baseAddress);
  }

  getFiltered = async (search = null) => {
    const filterUrl = `${this.baseAddress}/?search=${search}&format=json`;
    return this.axios.get(filterUrl)
  }

  getById = async (placeId) => {
    const filterUrl = `${this.baseAddress}/${placeId}&format=json`;
    return await this.axios.get(filterUrl);
  }

  getByCategory = async (categoryId) => {
    const filterUrl = `${this.baseAddress}/?category=${categoryId}&format=json`;
    return await this.axios.get(filterUrl);
  }
}

export { PlaceApi };