import { Component, OnInit, Input } from '@angular/core';
import { StoreService } from "./../../services/store.service";
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.sass']
})

export class AddUserComponent implements OnInit {

  public counter = 0;
  public counterArr = [];
  public formVal = []


  constructor(private router: Router, public storeService: StoreService, private fb: FormBuilder) {
    this.counterArr = Array(this.counter + 1).fill(1).map((x, i) => i)
    this.formVal = Array(this.counter + 1).fill(1).map((x, i) => ({
      fname: new FormControl(''),
      lname: new FormControl(''),
      email: new FormControl(''),
      mobile: new FormControl(''),
      city: new FormControl('')
    }))
  }

  ngOnInit() {

  }

  addRow() {
    this.counter = this.counter + 1
    this.counterArr.push(this.counter)
    this.formVal.push({
      fname: new FormControl(''),
      lname: new FormControl(''),
      email: new FormControl(''),
      mobile: new FormControl(''),
      city: new FormControl('')
    })
  }

  removeRow() {
    if (this.counter <= 0) {
      alert('Error ! ')
    } else {
      this.counter = this.counter - 1
      this.counterArr.splice(-1, 1)
      this.formVal.splice(-1, 1)
    }
  }

  saveValue() {
    let formVal = this.formVal.map((item) => (
      {
        fname: item.fname.value,
        lname: item.lname.value,
        email: item.email.value,
        mobile: item.mobile.value,
        city: item.city.value
      }
    ))
    this.storeService.setUsers(formVal)
    this.router.navigateByUrl('/displayUser');
  }
}
