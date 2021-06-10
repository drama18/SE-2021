import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestAppointmentPage } from './request-appointment.page';

const routes: Routes = [
  {
    path: '',
    component: RequestAppointmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestAppointmentPageRoutingModule {}
