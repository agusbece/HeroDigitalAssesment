
import { CoreActionTypes } from './core.actions'
import { Task } from './core.model';
import * as TaskActions from './core.actions'

// 2 - Estado inicial
const initialState: Task = {
  name: 'First Task',
  state: 'Pending',
  isLoading: false
}

// 3 - Switch con las funciones puras
export function taskReducer(state: Task = initialState, action: TaskActions.Actions) {
  switch (action.type) {
    case CoreActionTypes.ADD_SUBSCRIPTION_REQUEST:
      return  {
        ...state,
        state: action.payload
      };
    case CoreActionTypes.ADD_SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        state: action.payload
      };
    case CoreActionTypes.ADD_SUBSCRIPTION_FAIL:
      return  {
        ...state,
        state: action.payload
      };
    default:
      return state;
  }
}