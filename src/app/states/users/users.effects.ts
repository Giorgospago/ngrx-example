import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {LoadSuccess, UsersActions} from './users.actions';
import {switchMap} from 'rxjs/operators';
import {DataService} from '../../services/data.service';

@Injectable()
export class UsersEffects {

  constructor(
    private actions$: Actions,
    private dataService: DataService
  ) {}

  @Effect()
  loadUsers$ = this.actions$.pipe(
    ofType(UsersActions.Load),
    switchMap(async () => {
      const users = await this.dataService.getAllUsers().toPromise();

      return new LoadSuccess(users);
    })
  );

}
