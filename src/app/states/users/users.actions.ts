import { Action } from '@ngrx/store';

export enum UsersActions {
  Load = '[Users] Load',
  LoadSuccess = '[Users] Load Success',
  Create = '[Users] Create',
  UpdateName = '[Users] UpdateName',
  Delete = '[Users] Delete'
}

export interface User {
  id?: string;
  name?: string;
  email?: string;
}

export class Load implements Action {
  readonly type = UsersActions.Load;
}

export class LoadSuccess implements Action {
  readonly type = UsersActions.LoadSuccess;
  constructor(public payload: User[]) {}
}

export class Create implements Action {
  readonly type = UsersActions.Create;
  constructor(public payload: User) {}
}

export class UpdateName implements Action {
  readonly type = UsersActions.UpdateName;
  constructor(public payload: {id: string, name: string}) {}
}

export class Delete implements Action {
  readonly type = UsersActions.Delete;
  constructor(public payload: {id: string}) {}
}

export type UsersActionsUnion = Load
  | LoadSuccess
  | Create
  | UpdateName
  | Delete;
