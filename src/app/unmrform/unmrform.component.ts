import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unmrform',
  templateUrl: './unmrform.component.html',
  styleUrls: ['./unmrform.component.css']
})
export class UnmrformComponent implements OnInit {

  constructor() { }
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

  formData:any = {
    name:"",
    childName:"",
    relation:"",
    from:"",
    to:"",
    date:"",
    receiver_name:"",
    receiver_relation:"",
    number:"",
    termsAndConditions:""
  }


  ngOnInit(): void {
  }
  submitForm(){
    
      console.log(this.formData); 
  }


}
