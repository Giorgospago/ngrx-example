import {User, UsersActions, UsersActionsUnion} from './users.actions';

export const initialState: User[] = [];

export function usersReducer(state: User[] = initialState, action: UsersActionsUnion): User[] {
  switch (action.type) {
    case UsersActions.LoadSuccess:
      return action.payload;

    case UsersActions.Create:
      return [...state, action.payload];

    case UsersActions.UpdateName:
      const user = state.find(u => u.id === action.payload.id);
      if (user) {
        user.name = action.payload.name;
      }
      return state;

    case UsersActions.Delete:
      const userIndex = state.findIndex(u => u.id === action.payload.id);
      if (userIndex >= 0) {
        state.splice(userIndex, 1);
      }
      return state;

    default:
      return state;
  }
}
