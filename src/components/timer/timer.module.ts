import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Timer } from './timer';

@NgModule({
  declarations: [
    Timer,
  ],
  imports: [
    //IonicModule.forChild(Timer),
  ],
  exports: [
    Timer
  ]
})
export class TimerModule {}
