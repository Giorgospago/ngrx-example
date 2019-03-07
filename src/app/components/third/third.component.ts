import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Delete, Load} from '../../states/users/users.actions';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {

  constructor(private store: Store<{users: any}>) { }

  ngOnInit() {
  }

  deleteDimos() {
    this.store.dispatch(new Delete({id: "2"}));
  }

  loadAgain() {
    this.store.dispatch(new Load());
  }
}
