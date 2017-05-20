import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingPage } from '../setting/setting';
import { RulePage } from '../rule/rule';
import { MenuPage } from '../menu/menu';
import { PlayerPage } from '../player/player';
import { RankingPage } from '../ranking/ranking';
import { PlayPage } from '../play/play';
/**
 * Generated class for the Limitscore page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-limitscore',
  templateUrl: 'limitscore.html',
})
export class LimitscorePage
{
    public time = [30, 70, 100, 150];

    constructor(public navCtrl: NavController){}

    getTime(event)
    {
        console.log(event);
    }
    sequeToSettingPage()
    {
        this.navCtrl.push(SettingPage);
    }
    sequeToRulePage()
    {
        this.navCtrl.push(RulePage);
    }
    sequeToMenuPage()
    {
        this.navCtrl.push(MenuPage);
    }
    sequeToPlayerPage()
    {
        this.navCtrl.push(PlayerPage);
    }
    sequeToRankingPage()
    {
        this.navCtrl.push(RankingPage);
    }
    sequeToPlayPage()
    {
        this.navCtrl.push(PlayPage);
    }
}