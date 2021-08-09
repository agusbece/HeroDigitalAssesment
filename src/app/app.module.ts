import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { taskReducer } from './store/core.reducer';

import { EffectsModule } from '@ngrx/effects';
import { CoreEffects } from './store/core.effects';
import { CoreService } from './store/core.services';
import { HttpClientModule } from '@angular/common/http';
import { SubscribeFormComponent } from './subscribe-form/subscribe-form.component';

import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SubscribeFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({state: taskReducer}),
    EffectsModule.forRoot([CoreEffects]),
    
    StoreDevtoolsModule.instrument({
      autoPause: true
    }),
    NgSelectModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
