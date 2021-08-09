import { Action } from '@ngrx/store';

export enum CoreActionTypes {
  ADD_SUBSCRIPTION_REQUEST = '[CORE] Subscription request',
  ADD_SUBSCRIPTION_SUCCESS = '[CORE] Subscription success',
  ADD_SUBSCRIPTION_FAIL = '[CORE] Subscription failed'
}

export class ActionAddTaskRequest implements Action {
  readonly type = CoreActionTypes.ADD_SUBSCRIPTION_REQUEST
  constructor(public payload: any) { }
}
export class ActionAddTaskSuccess implements Action {
  readonly type = CoreActionTypes.ADD_SUBSCRIPTION_SUCCESS
  constructor(public payload: any) { }
}
export class ActionAddTaskFail implements Action {
  readonly type = CoreActionTypes.ADD_SUBSCRIPTION_FAIL
  constructor(public payload: any) { }
}

// 4 - Exportación de la acción
export type Actions = 
  | ActionAddTaskRequest
  | ActionAddTaskSuccess
  | ActionAddTaskFail
  ;