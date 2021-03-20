import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public userStore = []
  constructor() { }

  setUsers(formVal) {
    formVal.forEach((item) => {
      let currItem = this.userStore[this.userStore.length - 1]
      item['id'] = currItem ? currItem.id + 1 : 1
      this.userStore.push(item)
    })
    console.log(this.userStore)
  }

  getUsers() {
    return this.userStore
  }

}
