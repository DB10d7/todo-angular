import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddListComponent } from './add-list/add-list.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { UpdateListComponent } from './update-list/update-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    component:AddListComponent,
    path:'add'
  },
  {
    component:LoginComponent,
    path:'login'
  },
  {
    component:RegisterComponent,
    path:'register'
  },
  {
    path:'list',
    children: [
      {
        component:ToDoListComponent,
        path:''
      },
      {
        component:UpdateListComponent,
        path:'update/:id'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
