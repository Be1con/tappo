//Import Essential Components
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Import Pages
import { RulePage } from '../rule/rule';
import { MenuPage } from '../menu/menu';
import { PlayerPage } from '../player/player';
import { RankingPage } from '../ranking/ranking';


 /* Generated class for the Setting page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})

export class SettingPage
{
    constructor(public navCtrl: NavController)
    {
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
}




   

