import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from '../../states/users/users.actions';
import {UsersFacade} from '../../states/users/users.facade';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  public users$: Observable<User[]>;

  constructor(private uf: UsersFacade) { }

  ngOnInit() {
    this.users$ = this.uf.getUsers();
    this.uf.loadUsers();
  }

}
