
import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { AppState } from '../app.state';

import { switchMap, map, catchError } from 'rxjs/operators';

import * as TaskActions from './core.actions';
import { CoreService } from './core.services';


@Injectable()
export class CoreEffects {
  constructor(
    private actions$: Actions<Action>,
    private featuresStore: Store<AppState>,
    private service: CoreService
  ) {}

  @Effect()
  loginRequestEffect$: Observable<Action> = this.actions$.pipe(
    //    retryWithBackoff(1000),
    ofType<TaskActions.Actions>(TaskActions.CoreActionTypes.ADD_SUBSCRIPTION_REQUEST),
    switchMap(action =>
      this.service
        .subscribe(action.payload.email)
        .pipe(
          map(user => new TaskActions.ActionAddTaskSuccess({})),
          catchError(error => 
            observableOf(new TaskActions.ActionAddTaskFail({}))
          )
        )
    )
  );

}