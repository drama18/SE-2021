import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MentorPage } from './mentor.page';

const routes: Routes = [
  {
    path: '',
    component: MentorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MentorPageRoutingModule {}
