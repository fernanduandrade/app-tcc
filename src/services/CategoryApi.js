import { BaseApi } from "./BaseApi";

class CategoryApi extends BaseApi {
  constructor(axios, baseAddress) {
    super(axios, baseAddress);
  }

}

export { CategoryApi };