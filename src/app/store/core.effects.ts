
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action} from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';

import { switchMap, map, catchError } from 'rxjs/operators';

import * as CoreActions from './core.actions';
import { CoreService } from './core.services';

@Injectable()
export class CoreEffects {
  constructor(
    private actions$: Actions<Action>,
    private service: CoreService
  ) {}

  @Effect()
  loginRequestEffect$: Observable<Action> = this.actions$.pipe(
    //    retryWithBackoff(1000),
    ofType<CoreActions.Actions>(CoreActions.CoreActionTypes.ADD_SUBSCRIPTION_REQUEST),
    switchMap(action =>
      this.service
        .subscribe(action.payload)
        .pipe(
          map(user => new CoreActions.ActionAddTaskSuccess({})),
          catchError(error => 
            observableOf(new CoreActions.ActionAddTaskFail({}))
          )
        )
    )
  );
}