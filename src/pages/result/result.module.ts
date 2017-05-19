import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResultPage } from './result';

@NgModule({
  declarations: [
    ResultPage,
  ],
  imports: [
    IonicPageModule.forChild(ResultPage),
  ],
  exports: [
    ResultPage
  ]
})
export class ResultModule {}
