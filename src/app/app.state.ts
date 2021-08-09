
// import { Task } from './store/core.actions';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { Task } from './store/core.model';
import { taskReducer } from './store/core.reducer';

export const reducers: ActionReducerMap<AppState> = {
  state: taskReducer
};

export const selectCoreState = createFeatureSelector<AppState, Task>('state');

export interface AppState {
  state: Task;
}