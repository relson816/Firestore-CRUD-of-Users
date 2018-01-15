import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/User';
@Injectable()
export class UsersService {
  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  constructor() { }
      //this.users = this.afs.collection('users').valueChanges();
}

  getUsers(){
    return this.users;
  }