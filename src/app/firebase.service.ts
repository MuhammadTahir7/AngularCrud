import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db : AngularFirestore) { }
  createUser(value){
    return this.db.collection('users').add({
      name: value.name,
      surname: value.surname,
      email: value.email,
    });
  }
  deleteUser(userKey){
    return this.db.collection('users').doc(userKey).delete();
  }
  getUser(userKey){
    return this.db.collection('users').doc(userKey).snapshotChanges();
  }
  getUsers(){
    return this.db.collection('users').snapshotChanges();
  }

  searchUsers(searchValue){
    return this.db.collection('users',ref => ref.where('nameToSearch', '>=', searchValue)
      .where('nameToSearch', '<=', searchValue + '\uf8ff'))
      .snapshotChanges()
  }
  
  updateUser(userKey, value){
    value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('users').doc(userKey).set(value);
  }

}