import { BaseApi } from "./BaseApi";

class PlaceApi extends BaseApi {
  constructor(axios, baseAddress) {
    super(axios, baseAddress);
  }

  getFiltered = async (search = null) => {
    const filterUrl = `${this.baseAdddress}/?search=${search}`;
    return  this.axios.get(filterUrl)
  }

  getById = async (placeId) => {
    const filterUrl = `${this.baseAdddress}/${placeId}`;
    return await this.axios.get(filterUrl);
  }

  getByCategory = async (categoryId) => {
    const filterUrl = `${this.baseAdddress}/?category=${categoryId}`;
    return await this.axios.get(filterUrl);
  }
}

export { PlaceApi };