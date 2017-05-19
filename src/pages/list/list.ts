import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LimitscorePage } from '../limitscore/limitscore';
/**
 * Generated class for the List page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

   constructor(public navCtrl: NavController) {
  }
      sequeToLimitscorePage() {
      this.navCtrl.push(LimitscorePage);
   }

}