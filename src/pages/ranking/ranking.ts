import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingPage } from '../setting/setting';
import { RulePage } from '../rule/rule';
import { MenuPage } from '../menu/menu';
import { PlayerPage } from '../player/player';
/**
 * Generated class for the Ranking page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-ranking',
  templateUrl: 'ranking.html',
})
export class RankingPage {

  constructor(public navCtrl: NavController, public navPar: NavParams) {
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
      sequeToPlayerPage() {
      this.navCtrl.push(PlayerPage);
   }

}