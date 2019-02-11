import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { NewUserComponent } from './new-user/new-user.component';
import {MainpageComponent} from './mainpage/mainpage.component'
import { EditUserResolver } from './edit/edit.resolver';

const routes: Routes = [

  {
    path:'', redirectTo: 'mainpage' , pathMatch:'full'
 },

 {
   path:'New-User',
   component:NewUserComponent
 },

 {
   path:'edit',
   component:EditComponent
 },
 {
  path:'mainpage',
  component:MainpageComponent
},

{ path: 'details/:id', 
component: EditComponent, 
resolve:{data : EditUserResolver} } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
