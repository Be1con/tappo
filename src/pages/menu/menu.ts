import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingPage } from '../setting/setting';
import { RulePage } from '../rule/rule';
import { RankingPage } from '../ranking/ranking';
import { PlayerPage } from '../player/player';
import { Platform } from 'ionic-angular';

  
/**
 * Generated class for the Menu page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})

export class MenuPage
{
    constructor(public navCtrl: NavController, private platform: Platform)
    {
    }
    
    sequeToSettingPage()
    {
        this.navCtrl.push(SettingPage);
    }
    sequeToRulePage()
    {
        this.navCtrl.push(RulePage);
    }
    sequeToRankingPage()
    {
        this.navCtrl.push(RankingPage);
    }
    sequeToPlayerPage()
    {
        this.navCtrl.push(PlayerPage);
    }
    exitApp()
    {
        this.platform.exitApp();
    }
}
