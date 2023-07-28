import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private route:Router
  ) { }
  public all_form=["sd"]
  public roles:any ="security"

  ngOnInit(): void {
  }

  formData: any = {
    termsAndConditions: '',
  }
  onSubmit(){}
  package(i:any){
    this.route.navigate(["packagedetails"], { queryParams: { id: i.id } })

    // open read only details of that component can just change status

  }

}
