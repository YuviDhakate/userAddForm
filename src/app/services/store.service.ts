import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StoreService {
  public userStore = []
  constructor() {
    let userList = localStorage.getItem('userStore')
    this.userStore = userList ? JSON.parse(userList) : []
  }

  setUsers(formVal) {
    formVal.forEach((item) => {
      item['id'] = this.userStore.length + 1
      this.userStore.unshift(item)
    })
    localStorage.setItem('userStore', JSON.stringify(this.userStore));
  }

  getUsers() {
    return this.userStore
  }

}
