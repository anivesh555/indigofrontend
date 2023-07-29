import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  constructor(
    private Activatedroute: ActivatedRoute,
    private router:Router
  ) { }
  public queryId:any
  ngOnInit(): void {
    const user =localStorage.getItem("token");
    if (!user) {
      this.router.navigate(["login"])
    
    }


    this.Activatedroute.queryParamMap.subscribe(
      (params) => {
        this.queryId = params.get('id') || '';
      },
      (error) => console.log('An error occurred:', error)
      );
  }

}
