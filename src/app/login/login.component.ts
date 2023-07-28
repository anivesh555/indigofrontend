import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    }
  username: string="";
  password: string="";

  constructor(private router: Router) {}

  login() {
    // You can add your authentication logic here.
    // For this example, we'll consider a simple username and password check.
    // if (this.username === 'admin' && this.password === 'password') {
    //   // If login is successful, navigate to the dashboard (assuming you have a 'dashboard' route).
    //   this.router.navigate(['/dashboard']);
    // } else {
    //   alert('Invalid username or password');
    // }
  }
}
