import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseService } from '../app/firebase.service'
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewUserComponent } from './new-user/new-user.component';
import{ReactiveFormsModule , FormsModule} from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { EditUserResolver } from './edit/edit.resolver';
import { AliComponent } from './ali/ali.component';
import { MainpageComponent } from './mainpage/mainpage.component';
//import { firestore } from 'firebase';

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    EditComponent,  
    HomeComponent, AliComponent, MainpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    AngularFireModule.initializeApp(environment.firebase),
 
  //  firestore.settings({timestampsInSnapShots :true}),
    AngularFirestoreModule,
    ReactiveFormsModule,
    
  ],
  providers: [FirebaseService,EditUserResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
