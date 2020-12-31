import { Injectable } from '@angular/core';
import { SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';

@Injectable()
export class CartService {

  private selectedData: Array<any> = [];

  constructor(private session: SessionStorageService) { }

  public getData() {
    let data = JSON.parse(this.session.get("OrderItems"));
    return data ? data : []
  }

  setData(data: any) {
    //this.selectedData = data;
    this.session.set("OrderItems", JSON.stringify(data));

  }

  removeData(data: any) {
    //this.selectedData = [];
    this.session.remove("OrderItems");
  }

}