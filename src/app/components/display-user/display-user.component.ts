import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { StoreService } from "./../../services/store.service";
import { Router } from '@angular/router';


@Component({
  selector: 'display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.sass']
})

export class DisplayUserComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public userList = []
  public dataSource;
  public displayedColumns;

  constructor(private router: Router, public storeService: StoreService) {
    this.userList = this.storeService.getUsers()
  }

  ngOnInit() {
    this.displayedColumns = ['id', 'fname', 'lname', 'email', 'mobile', 'city'];
    this.dataSource = new MatTableDataSource(this.userList);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  backToAddUser() {
    this.router.navigateByUrl('/addUser');
  }


}
