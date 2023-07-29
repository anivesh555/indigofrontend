import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UnmrformComponent } from './unmrform/unmrform.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'login', component:LoginComponent},
  {path:'signup', component:RegisterComponent},
  {path:'register', component:UnmrformComponent},
  {path:'edit', component:UnmrformComponent},
  {path:'details', component:UserdetailComponent},
  {path:'status', component:StatusComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
