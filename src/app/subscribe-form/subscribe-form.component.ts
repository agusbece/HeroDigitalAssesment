import { Component, OnDestroy, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppState, selectCoreState } from '../app.state';
import { ActionAddTaskRequest } from '../store/core.actions';

@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.scss']
})
export class SubscribeFormComponent implements OnInit, OnDestroy {
  // Option for select
  selectOptions = 
    [{id: 1, label: "Yes"}, {id: 2, label: "No"}];
  // Forms
  subscriptionForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', [Validators.minLength(3), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    organization: new FormControl(''),
    euResident: new FormControl('', Validators.required)
  });
  checkboxGroup: FormGroup;

  get firstName() {
    return this.subscriptionForm.get('firstName');
  }
  get lastName() {
    return this.subscriptionForm.get('lastName');
  }
  get email() {
    return this.subscriptionForm.get('email');
  }
  get euResident() {
    return this.subscriptionForm.get('euResident');
  }

  // checkboxes
  advancesCheckbox: boolean = true;
  alertsCheckbox: boolean = false;
  otherCheckbox: boolean = false;

  // Local variables
  isLoading: boolean = false;
  subscriptionSucceed: boolean = false;
  APIerror: any = null;

  // Subscriber to clean subscription on destroy
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private coreStore: Store<AppState>) {}

  ngOnInit(): void {
    this.subscribeToStoreAuth();
  }

  subscribeToStoreAuth() {
    this.coreStore.pipe(select(selectCoreState), 
      takeUntil(this.unsubscribe$)).subscribe(stateInfo => {
        this.isLoading = stateInfo.isLoading;
        this.subscriptionSucceed = stateInfo.subscriptionSucceed;
        this.APIerror = stateInfo.error;
        if (this.APIerror) {
          alert('Sorry. There has been an error on the server')
        }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  inputsAreValid(): boolean {
    let isValid = this.advancesCheckbox || this.alertsCheckbox || this.otherCheckbox;
    isValid = isValid && 
      this.subscriptionForm.get('firstName').valid &&
      this.subscriptionForm.get('lastName').valid &&
      this.subscriptionForm.get('email').valid;
    return isValid;
  }

  onSubmit() {
    this.subscriptionForm.markAllAsTouched();    
    if (this.inputsAreValid()) {
      const uploadData = new FormData();
      uploadData.append('firstName', this.subscriptionForm.get('firstName').value);
      uploadData.append('lastName', this.subscriptionForm.get('lastName').value);
      uploadData.append('email', this.subscriptionForm.get('email').value);
      if (this.subscriptionForm.get('organization').value) {
        uploadData.append('organization', this.subscriptionForm.get('organization').value);
      }
      const topicsToSubscribe = "[" 
        + (this.advancesCheckbox) ? "advances" : ""
        + (this.alertsCheckbox) ? "alerts" : ""
        + (this.otherCheckbox) ? "other comunications" : ""
        + "]";
      uploadData.append('topicsToSubscribe', topicsToSubscribe);
      this.coreStore.dispatch(new ActionAddTaskRequest(uploadData))
    }
  }

  resetForms() {
    this.subscriptionForm.get('firstName').setValue('');
    this.subscriptionForm.get('firstName').markAsUntouched();
    this.subscriptionForm.get('lastName').setValue('');
    this.subscriptionForm.get('lastName').markAsUntouched();
    this.subscriptionForm.get('email').setValue('');
    this.subscriptionForm.get('email').markAsUntouched();
    this.subscriptionForm.get('organization').setValue('');
    this.subscriptionForm.get('organization').markAsUntouched();
    this.advancesCheckbox = true;
    this.alertsCheckbox = false;
    this.otherCheckbox = false;
  }
}
