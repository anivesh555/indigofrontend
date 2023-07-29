import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from "../../environments/environment";
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { PopupstatusComponent } from '../popupstatus/popupstatus.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private route:Router,
    private http:HttpClient,
    private dialog: MatDialog
  ) { }

  public all_form:any
  public all_form_parent:any
  public accessToken:any
  public roles:any 
  public statusDialog :any
  ngOnInit (): void {


    const user = localStorage.getItem("token");
        if (!user) {
          this.route.navigate(["login"])
        
        }
        else{
          this.accessToken = user
        }
    this.roles = localStorage.getItem("roles");
    const httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json',"Access-Control-Allow-Origin": "*",'x-access-token': `${this.accessToken}`})
    }
    this.http.get(`${environment.apiUrl}/api/trip/all`,httpOptions).subscribe((res)=>{
      console.log(res,"===>>>")
      
      this.all_form = res

    },error=>{
      console.log(error,"erooeee------")
    })


  }

  formData: any = {
    termsAndConditions: '',
  }
  onSubmit(){}
  package(i:any){
    this.route.navigate(["status"], { queryParams: { id: i.id } })
    // open read only details of that component can just change status

  }
  onEdit(i:any){
    this.route.navigate(["edit"], { queryParams: { id: i.id } })

  }
  checkStatus(i:any){
    let checkstatus:any
    let staus:any
    const httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json',"Access-Control-Allow-Origin": "*",'x-access-token': `${this.accessToken}`})
    }
    this.http.get(`${environment.apiUrl}/api/trip/user/${i.id}`,httpOptions).subscribe((res)=>{
      console.log(res,"===>>>")
      checkstatus = res
      staus = checkstatus["0"]["status"]
      console.log(staus,"stauts===")
      this.dialog.open(PopupstatusComponent, {
        data:staus
        
      });

    },error=>{
      console.log(error,"erooeee------")
    })
    


  }
  deleteTrip(i:any){
    let checkstatus:any
    let staus:any
    const httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json',"Access-Control-Allow-Origin": "*",'x-access-token': `${this.accessToken}`})
    }
    this.http.delete(`${environment.apiUrl}/api/trip/user/${i.id}`,httpOptions).subscribe((res)=>{
      console.log(res,"===>>>")
      checkstatus = res
      this.dialog.open(PopupstatusComponent, {
        data:"deleted successfully"
        
      });
      
      this.http.get(`${environment.apiUrl}/api/trip/all`,httpOptions).subscribe((res)=>{
        console.log(res,"===>>>")
        
        this.all_form = res
  
      },error=>{
        console.log(error,"erooeee------")
      })
    

    },error=>{
      console.log(error,"erooeee------")
    })
    


  }


}
