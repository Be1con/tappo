//Import essential components
import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ModalController } from 'ionic-angular';

//Import the pages
import { SettingPage } from '../setting/setting';
import { RulePage } from '../rule/rule';
import { MenuPage } from '../menu/menu';
import { PlayerPage } from '../player/player';
import { DetailPage } from '../detail/detail';

//Import service
import { LeaderboardService } from '../../services/leaderboard.service';
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

export class RankingPage
{
    //Variables
    public stand: any = {};

    constructor(
        public navCtrl: NavController,
        public navPar: NavParams,
        private leaderboardService: LeaderboardService,
        private platform: Platform,
        private zone: NgZone,
        private modalCtrl: ModalController
    ) {}

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

    ionViewDidLoad()
    {
        this.platform.ready().then(() => {
            this.leaderboardService.initDB();

            this.leaderboardService.getAll()
                .then(data => {
                    this.zone.run(() => {
                        this.leaderboardService = data;
                    });
                })
                .catch(console.error.bind(console));
        });
    }

    delete()
    {
        this.leaderboardService.delete(this.stand).catch(console.error.bind(console));
    }

    showDetail(stand)
    {
        let modal = this.modalCtrl.create(DetailPage, { stand: stand });
        modal.present();
    }
}