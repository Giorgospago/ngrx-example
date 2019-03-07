import { Action } from '@ngrx/store';

export enum CounterActions {
  Increment = '[counter] Increment',
  Decrement = '[counter] Decrement',
  Reset = '[counter] Reset'
}


export class Increment implements Action {
  readonly type = CounterActions.Increment;
}

export class Decrement implements Action {
  readonly type = CounterActions.Decrement;
}

export class Reset implements Action {
  readonly type = CounterActions.Reset;
}
