import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {CounterActions, Decrement} from './counter.actions';
import {switchMap} from 'rxjs/operators';

@Injectable()
export class CounterEffects {

  constructor(private actions$: Actions) {
  }

  @Effect()
  onIncrement$ = this.actions$.pipe(
    ofType(CounterActions.Increment),
    switchMap(data => {
      console.log(data);

      return [];
    })
  );

}
