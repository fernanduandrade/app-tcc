class BaseApi {
  constructor(axios, baseAddress) {
    this.axios = axios;
    this.baseAddress = baseAddress;
  }

  get = async () => await this.axios.get(this.baseAddress);
}

export { BaseApi };