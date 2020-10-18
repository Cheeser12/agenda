import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ScheduleItemComponent } from './schedule/schedule-item/schedule-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    ScheduleItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
