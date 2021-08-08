import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

import * as TaskActions from './../store/core.actions';

@Component({
  selector: 'app-store-tester',
  templateUrl: './store-tester.component.html',
  styleUrls: ['./store-tester.component.scss']
})
export class StoreTesterComponent implements OnInit {
  // INPUTS AND OUTPUTS
  @Input() counter: number = -1;

  constructor(
    private featuresStore: Store<AppState>) { }

  ngOnInit() {
  }

  runAction(email, state) {
    console.log('We do great!');
    // this.featuresStore.dispatch(
    //   new TaskActions.AddTask({name: email, state: `${state} ${email}`}) 
    // )      
    this.featuresStore.dispatch(
      new TaskActions.ActionAddTaskRequest({email: `email => ${email}`}) 
    )      
  }
}
