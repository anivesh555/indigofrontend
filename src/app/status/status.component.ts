import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { PopupstatusComponent } from '../popupstatus/popupstatus.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor(
    private route:Router,
    private activatedroute:ActivatedRoute,
    private http:HttpClient,
    private dialog: MatDialog
  ) { }
  statusOptions: string[] = ["confirm",'Received',"rejected" ,'Not Showed Up', "dropped"];
  selectedStatus: string = '';
  formData:any
  public accessToken: any;
  public queryid:any
  ngOnInit(): void {
    let data:any
    const user =localStorage.getItem("token");
        if (!user) {
          this.route.navigate(["login"])
        
        }
        else{
          this.accessToken = user
        }
    this.activatedroute.queryParamMap.subscribe(
      (params) => {
        this.queryid = params.get('id') || '';
      })
      const httpOptions = {
        headers: new HttpHeaders({'Content-type': 'application/json',"Access-Control-Allow-Origin": "*",'x-access-token': `${this.accessToken}`})
      }
      this.http.get(`${environment.apiUrl}/api/trip/user/${this.queryid}`,httpOptions).subscribe((res)=>{
        console.log(res,"===>><<<<<>")
        data = res
        this.formData = data["0"]
      })




  }
  updateStatus(){
    const httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json',"Access-Control-Allow-Origin": "*",'x-access-token': `${this.accessToken}`})
    }
    this.http.put(`${environment.apiUrl}/api/trip/status/${this.queryid}`,{tripStatus:this.selectedStatus},httpOptions).subscribe((res)=>{
      console.log(res,"--------<>")
      this.dialog.open(PopupstatusComponent, {
        data:this.selectedStatus
        
      });

    })


  }
}