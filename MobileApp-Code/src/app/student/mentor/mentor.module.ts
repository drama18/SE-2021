import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MentorPageRoutingModule } from './mentor-routing.module';

import { MentorPage } from './mentor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MentorPageRoutingModule
  ],
  declarations: [MentorPage]
})
export class MentorPageModule {}
