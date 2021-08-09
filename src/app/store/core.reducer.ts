
import { CoreActionTypes } from './core.actions'
import { Task } from './core.model';
import * as TaskActions from './core.actions'

const initialState: Task = {
  subscriptionSucceed: false,
  isLoading: false,
  error: null  
}

export function taskReducer(state: Task = initialState, action: TaskActions.Actions) {
  switch (action.type) {
    case CoreActionTypes.ADD_SUBSCRIPTION_REQUEST:
      return  {
        ...state,
        error: null,
        isLoading: true
      };
    case CoreActionTypes.ADD_SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        state: action.payload,
        subscriptionSucceed: true,
        isLoading: false
      };
    case CoreActionTypes.ADD_SUBSCRIPTION_FAIL:
      return  {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}