//Import Essential Components
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Import pages
import { PlayerPage } from '../player/player';
import { MenuPage } from '../menu/menu';
import { RankingPage } from '../ranking/ranking';
/**
 * Generated class for the Rule page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-rule',
  templateUrl: 'rule.html',
})
/**export class RulePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Rule');
  }

}*/

export class RulePage
{
    constructor(public navCtrl: NavController)
    {
    }

    sequeToPlayerPage()
    {
        this.navCtrl.push(PlayerPage);
    }
    sequeToRulePage()
    {
        this.navCtrl.push(RulePage);
    }
    sequeToMenuPage()
    {
        this.navCtrl.push(MenuPage);
    }
    sequeToRankingPage()
    {
      this.navCtrl.push(RankingPage);
    }
}

