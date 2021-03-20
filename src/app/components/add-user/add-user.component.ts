import { Component, OnInit, Input } from '@angular/core';
import { StoreService } from "./../../services/store.service";
import { Router } from '@angular/router';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.sass']
})

export class AddUserComponent implements OnInit {

  public counter = 0;
  public counterArr = [];
  public formVal = []
  public dummyVal = ''

  constructor(private router: Router, public storeService: StoreService) {
    this.counterArr = Array(this.counter + 1).fill(1).map((x, i) => i)
    this.formVal = Array(this.counter + 1).fill(1).map((x, i) => ({
      fname: '',
      lname: '',
      email: '',
      mobile: ''
    }))
  }

  ngOnInit() {

  }

  addRow() {
    this.counter = this.counter + 1
    this.counterArr.push(this.counter)
    this.formVal.push({
      fname: '',
      lname: '',
      email: '',
      mobile: ''
    })
    console.log(this.counter, this.counterArr)
  }

  removeRow() {
    if (this.counter <= 0) {
      alert('error')
    } else {
      this.counter = this.counter - 1
      this.counterArr.splice(-1, 1)
      this.formVal.splice(-1, 1)
      console.log(this.counter, this.counterArr)
    }
  }

  saveValue() {
    this.storeService.setUsers(this.formVal)
    this.router.navigateByUrl('/displayUser');
  }
}
