import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { TimerComponent } from './timer/timer.component';
import { LogComponent } from './log/log.component';

@NgModule({
  declarations: [AppComponent, InputComponent, TimerComponent, LogComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
