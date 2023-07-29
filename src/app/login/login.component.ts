import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  ngOnInit() {
    
    }
  username: string="";
  password: string="";

  constructor(private router: Router,
    private http:HttpClient
    ) {}

  login() {
    let data:any
    console.log(this.username,this.password)
    const httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json',"Access-Control-Allow-Origin": "*"})
    }
    const val = {username:this.username,password:this.password}


    this.http.post(`${environment.apiUrl}/api/user/login`,val,httpOptions).subscribe((res)=>{
      
      console.log(res,"register")
      data = res
      console.log(data["data"]["tokens"]["accessToken"],"token",data["data"]["roles"])
      if(data["data"]["tokens"]["accessToken"]){
        localStorage.clear()
        localStorage.setItem("token",data["data"]["tokens"]["accessToken"])
        localStorage.setItem("roles",data["data"]["roles"])
        this.router.navigate([""])
      }
      this.username ="";
      this.password="";
      
      
    },error=>{
      console.log(error,"erooeee------")
    })
    
  }
}
