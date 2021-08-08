import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { StoreTesterComponent } from './store-tester/store-tester.component';

import { taskReducer } from './store/core.reducer';

import { EffectsModule } from '@ngrx/effects';
import { CoreEffects } from './store/core.effects';
import { CoreService } from './store/core.services';
import { HttpClientModule } from '@angular/common/http';
import { SubscribeFormComponent } from './subscribe-form/subscribe-form.component';



@NgModule({
  declarations: [
    AppComponent,
    StoreTesterComponent,
    SubscribeFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({state: taskReducer}),
    EffectsModule.forRoot([CoreEffects]),
    
    StoreDevtoolsModule.instrument({
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    })
  ],
  providers: [CoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
