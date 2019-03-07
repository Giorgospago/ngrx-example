import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {UpdateName} from '../../states/users/users.actions';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  constructor(private store: Store<{users: any}>) { }

  ngOnInit() {
  }

  updateGeorge() {
    this.store.dispatch(new UpdateName({id: "1", name: "ngrxexampleARA"}));
  }
}
