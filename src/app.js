import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import { inject } from 'aurelia-framework';
import AuthService from 'AuthService';

@inject(AuthService)
export class App {

  constructor(AuthService) {
  	this.auth = AuthService;
  }
}

export class ToJSONValueConverter {
  toView(obj) {
    if (obj) {
      return JSON.stringify(obj, null, 2)
    }
  }
}