import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from '../states/users/users.actions';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor() { }

  getAllUsers(): Observable<User[]> {
    return of([
      {id: "1", name: "George", email: "giorgospago23@gmail.com"},
      {id: "2", name: "Dimos", email: "dmos@gmail.com"},
      {id: "3", name: "Giannis", email: "giannis@gmail.com"}
    ]);
  }

}
