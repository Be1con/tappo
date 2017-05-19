import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LimitscorePage } from './limitscore';

@NgModule({
  declarations: [
    LimitscorePage,
  ],
  imports: [
    IonicPageModule.forChild(LimitscorePage),
  ],
  exports: [
    LimitscorePage
  ]
})
export class LimitscoreModule {}
