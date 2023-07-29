import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { UnmrformComponent } from './unmrform/unmrform.component';
import { HeaderComponent } from './header/header.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { StatusComponent } from './status/status.component';
import { PopupstatusComponent } from './popupstatus/popupstatus.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    UnmrformComponent,
    HeaderComponent,
    UserdetailComponent,
    StatusComponent,
    PopupstatusComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
