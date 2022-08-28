import { BaseApi } from "./BaseApi";

class PlaceApi extends BaseApi {
  constructor(axios, baseAddress) {
    super(axios, baseAddress);
  }

  getFiltered = async (search = null) => {
    const filterUrl = `${this.#_baseAdddress}/?search=${search}`;
    return  this.#_axios.get(filterUrl)
  }

  getById = async (placeId) => {
    const filterUrl = `${this.#_baseAdddress}/${placeId}`;
    return await this.#_axios.get(filterUrl);
  }
}

export { PlaceApi };