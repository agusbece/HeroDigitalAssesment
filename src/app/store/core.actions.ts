import { Action } from '@ngrx/store';

export enum CoreActionTypes {
  ADD_SUBSCRIPTION_REQUEST = '[CORE] Subscription request',
  ADD_SUBSCRIPTION_SUCCESS = '[CORE] Subscription success',
  ADD_SUBSCRIPTION_FAIL = '[CORE] Subscription failed'
}

export class ActionSubscribeRequest implements Action {
  readonly type = CoreActionTypes.ADD_SUBSCRIPTION_REQUEST
  constructor(public payload: any) { }
}
export class ActionSubscribeSuccess implements Action {
  readonly type = CoreActionTypes.ADD_SUBSCRIPTION_SUCCESS
  constructor(public payload: any) { }
}
export class ActionSubscribeFail implements Action {
  readonly type = CoreActionTypes.ADD_SUBSCRIPTION_FAIL
  constructor(public payload: any) { }
}

export type Actions = 
  | ActionSubscribeRequest
  | ActionSubscribeSuccess
  | ActionSubscribeFail
  ;