import {Action} from '@ngrx/store';
import {CounterActions} from './counter.actions';

export const initialState = 0;

export function counterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case CounterActions.Increment:
      return ++state;

    case CounterActions.Decrement:
      return --state;

    case CounterActions.Reset:
      return 0;

    default:
      return state;
  }
}
