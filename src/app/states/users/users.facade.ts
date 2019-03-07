import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Load} from './users.actions';


@Injectable({
  providedIn: 'root'
})
export class UsersFacade {

  constructor(private store: Store<{users: any}>) { }

  loadUsers() {
    this.store.dispatch(new Load());
  }

  getUsers() {
    return this.store.pipe(select('users'));
  }
}
