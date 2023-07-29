import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from "../../environments/environment";
@Component({
  selector: 'app-unmrform',
  templateUrl: './unmrform.component.html',
  styleUrls: ['./unmrform.component.css']
})
export class UnmrformComponent implements OnInit {
  
  constructor(
    private router:Router,
    private activatedroute:ActivatedRoute,
    private http:HttpClient
  ) { }
  public states:Array<any> = [ "Andhra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chhattisgarh",
                "Goa",
                "Gujarat",
                "Haryana",
                "Himachal Pradesh",
                "Jammu and Kashmir",
                "Jharkhand",
                "Karnataka",
                "Kerala",
                "Madhya Pradesh",
                "Maharashtra",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "Nagaland",
                "Odisha",
                "Punjab",
                "Rajasthan",
                "Sikkim",
                "Tamil Nadu",
                "Telangana",
                "Tripura",
                "Uttarakhand",
                "Uttar Pradesh",
                "West Bengal",
                "Andaman and Nicobar Islands",
                "Chandigarh",
                "Dadra and Nagar Haveli",
                "Daman and Diu",
                "Delhi",
                "Lakshadweep",
                "Puducherry"]
  public current_route :any
  public accessToken: any;

  public formData:any = {
    name:"",
    childname:"",
    relation:"",
    departure_location:"",
    destination:"",
    date:"",
    receiver:"",
    receiver_relation:"",
    receiver_phone_number:"",
  }

  public queryid:any

  ngOnInit(): void {

    const user =localStorage.getItem("token");
    if (!user) {
      this.router.navigate(["login"])
    
    }else{
      this.accessToken = user
    }



    let data:any
    this.current_route = this.router.url
    this.activatedroute.queryParamMap.subscribe(
      (params) => {
        this.queryid = params.get('id') || '';
      })
  

    // if route is edit one than just the change the value
    if (this.current_route.includes("edit")){
      console.log("yes =====")
      
      const httpOptions = {
        headers: new HttpHeaders({'Content-type': 'application/json',"Access-Control-Allow-Origin": "*",'x-access-token': `${this.accessToken}`})
      }
      this.http.get(`${environment.apiUrl}/api/trip/user/${this.queryid}`,httpOptions).subscribe((res)=>{
        
        data = res
        
        
        this.formData = data["0"]
        this.formData["date"] = data["0"]["date"].split('T')[0];
        console.log(this.formData,"===>>>")
      },error=>{
        console.log(error,"erooeee------")
      })

  
    }
    // this.formData = data
    console.log(this.formData)
  }
  submitForm(){
    
    const httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json',"Access-Control-Allow-Origin": "*",'x-access-token': `${this.accessToken}`})
    }
    console.log(this.formData,"post")

    this.http.post(`${environment.apiUrl}/api/trip`,this.formData,httpOptions).subscribe((res)=>{
      
      console.log(res)
      this.formData.reset
      this.router.navigate([""])


      
    },error=>{
      console.log(error,"erooeee------")
    }) 
  }
  updateForm(){
    const httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json',"Access-Control-Allow-Origin": "*",'x-access-token': `${this.accessToken}`})
    }
   
    console.log(this.formData,"PUt")

    
    this.http.put(`${environment.apiUrl}/api/trip/${this.queryid}`,this.formData,httpOptions).subscribe((res)=>{
      

      console.log(res)
      this.router.navigate([""])
    },error=>{
      console.log(error,"erooeee------")
    })
    
  }


}
