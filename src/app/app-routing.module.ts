import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';

const routes: Routes = [{ path: '', component: AddUserComponent }, { path: 'addUser', component: AddUserComponent },
{ path: 'displayUser', component: DisplayUserComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
