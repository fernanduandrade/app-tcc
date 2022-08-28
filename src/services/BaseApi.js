class BaseApi {
  constructor(axios, baseAddress) {
    this.#_axios = axios;
    this.#_baseAddress = baseAddress;
  }

  get = async () => await this.#_axios.get(this.#_baseAddress);
}

export { BaseApi };