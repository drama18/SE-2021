import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestAppointmentPageRoutingModule } from './request-appointment-routing.module';

import { RequestAppointmentPage } from './request-appointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestAppointmentPageRoutingModule
  ],
  declarations: [RequestAppointmentPage]
})
export class RequestAppointmentPageModule {}
