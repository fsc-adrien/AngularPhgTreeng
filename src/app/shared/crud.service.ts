import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { User } from './user';
// import {Observable} from "rxjs";
// import * as firebase from "firebase";

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  usersRef: AngularFireList<any>;      // Reference to users list, Its an Observable
  userRef: AngularFireObject<any>;     // Reference to user object, Its an Observable too


  constructor(private db: AngularFireDatabase) { }   // Inject AngularFireDatabase dependency in constructor


  // Create User
  AddUser(user: User) {
    this.usersRef.push({
      name: user.name,
      email: user.email2,
      contact: user.contact
    });
  }

  // Read User
  GetUser(id: string) {
    this.userRef = this.db.object('users-list/' + id);
    return this.userRef;
  }

  // Read Users List
  GetUsersList() {
    this.usersRef = this.db.list('users-list');
    return this.usersRef;
  }

  // Update User
  UpdateUser(user: User) {
    this.userRef.update({
      name: user.name,
      email: user.email2,
      contact: user.contact
    });
  }

  // Delete User
  DeleteUser(id: string) {
    this.userRef = this.db.object('users-list/'+id);
    this.userRef.remove();
  }

}
