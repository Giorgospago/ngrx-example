import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { counterReducer } from './states/counter.reducer';
import { CounterEffects } from './states/counter.effects';
import { usersReducer } from './states/users/users.reducer';
import { UsersEffects } from './states/users/users.effects';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    StoreModule.forRoot({
      counter: counterReducer,
      users: usersReducer
    }),
    EffectsModule.forRoot([CounterEffects, UsersEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
