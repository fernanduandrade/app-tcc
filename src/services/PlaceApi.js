import { BaseApi } from "./BaseApi";

class PlaceApi extends BaseApi {
  constructor(axios, baseAddress) {
    super(axios, baseAddress);
  }

  getFiltered = async (search = null) => {
    const filterUrl = `${this.baseAddress}/?search=${search}`;
    return  this.axios.get(filterUrl)
  }

  getById = async (placeId) => {
    const filterUrl = `${this.baseAddress}/${placeId}/?format=json`;

    const result = await this.axios.get(filterUrl);;
    console.log(result);
    return result;
  }

  getByCategory = async (categoryId) => {
    const filterUrl = `${this.baseAddress}/?category=${categoryId}`;
    return await this.axios.get(filterUrl);
  }
}

export { PlaceApi };