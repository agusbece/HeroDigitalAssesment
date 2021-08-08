
// import { Task } from './store/core.actions';
import { Task } from './store/core.model';

// export interface Task {
//   name: string;
//   state: string;
// }

export interface AppState {
  readonly state: Task;
}