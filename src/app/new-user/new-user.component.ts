import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  eform : FormGroup;
  Link:string="...chas";
  item :any;
  validation_messages = {
    'name': [
      { type: 'required', message: 'Name is required.' }
    ],
    'surname': [
      { type: 'required', message: 'Surname is required.' }
    ],
    'email': [
      { type: 'required', message: 'Age is required.' },
    ]
  };
 
  constructor(
    private fb: FormBuilder,
    public firebaseService: FirebaseService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.createForm();
  }
    createForm(){
    this.eform = this.fb.group({
    name: ['', Validators.required ],
    surname: ['', Validators.required ],
    email: ['', Validators.required ],
});
}

onSubmit(values ){
  this.firebaseService.createUser(values).then(
    res => {
      this.resetFields();
      this.router.navigate(['/mainpage']);
       }
  )

}
resetFields(){
  this.eform = this.fb.group({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });

}

}