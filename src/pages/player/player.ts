import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingPage } from '../setting/setting';
import { RulePage } from '../rule/rule';
import { MenuPage } from '../menu/menu';
import { RankingPage } from '../ranking/ranking';
import { RegisterPage } from '../register/register';
import { ListPage } from '../list/list';
/** 
 * Generated class for the Player page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-player',
  templateUrl: 'player.html',
})
export class PlayerPage {

  constructor(public navCtrl: NavController) {
  }

   sequeToSettingPage() {
      this.navCtrl.push(SettingPage);
   }
      sequeToRulePage() {
      this.navCtrl.push(RulePage);
   }
      sequeToMenuPage() {
      this.navCtrl.push(MenuPage);
  }
      sequeToRankingPage() {
      this.navCtrl.push(RankingPage);
   }
     sequeToRegisterPage() {
      this.navCtrl.push(RegisterPage);
  }
      sequeToListPage() {
      this.navCtrl.push(ListPage);
   }
}