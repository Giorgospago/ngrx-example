import { State } from '@ngrx/store';
import {User, UsersActions, UsersActionsUnion} from './users.actions';

export const initialState = [];

export function usersReducer(state = initialState, {type, payload}: UsersActionsUnion)
: State<User[]> {
  switch (type) {
    case UsersActions.LoadSuccess:
      return payload;

    case UsersActions.Create:
      return [...state, payload];

    case UsersActions.UpdateName:
      const user = state.find(u => u.id === payload.id);
      if (user) {
        user.name = payload.name;
      }
      return state;

    case UsersActions.Delete:
      const userIndex = state.findIndex(u => u.id === payload.id);
      if (userIndex >= 0) {
        state.splice(userIndex, 1);
      }
      return state;

    default:
      return state;
  }
}
