import 'flatpickr/dist/flatpickr.css';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurpriseRoutingModule } from './surprise-routing.module';
import { CalendarComponent } from './calendar/calendar.component';


import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NguiDatetimePickerModule } from '@ngui/datetime-picker';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule.forRoot(),
    NgbModule.forRoot(),
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot(),
    SurpriseRoutingModule,
    NguiDatetimePickerModule
  ],
  declarations: [CalendarComponent],
})
export class SurpriseModule { }


