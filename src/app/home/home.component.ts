import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ageValue: number = 0;
  searchValue: string = "";
  items: Array<any>;
  age_filtered_items: Array<any>;
  name_filtered_items: Array<any>;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  
  ) { }

  ngOnInit() {
    this.getdata();
  }
  getdata(){
    this.firebaseService.getUsers()
    .subscribe(result=>{
      this.items = result;
      this.age_filtered_items = result;
      this.name_filtered_items = result;
      
    })
  }
  
  viewDetails(items){
    this.router.navigate(['/detalis/' + items.payload.doc.id])
  }


}
