//Import Essential Components
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

//Import Page
import { RankingPage } from '../ranking/ranking';

//Import Service
import { LeaderboardService } from '../../services/leaderboard.service'

/**
 * Generated class for the Detail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-detail',
    templateUrl: 'detail.html',
})
export class DetailPage
{
    constructor
    (
        public navCtrl: NavController,
        public navParams: NavParams,
        private leaderboardService: LeaderboardService,
        private viewCtrl: ViewController
    )
    {
    }

    public stand = {};
    public isNew = true;
    public action = 'Add';
    public point = 0;

    ionViewDidLoad()
    {
        let editStand = this.navParams.get('stand');

        if (editStand)
        {
            this.stand = editStand;
            this.isNew = false;
            this.action = 'Edit';
        }
    }

    save()
    {
        if (this.isNew)
        {
            this.leaderboardService.add(this.stand).catch(console.error.bind(console));
        }
        else
        {
            this.leaderboardService.update(this.stand).catch(console.error.bind(console));
        }

        this.redirect;
    }

    redirect()
    {
        this.viewCtrl.dismiss(RankingPage);
    }

    delete()
    {
        this.leaderboardService.delete(this.stand).catch(console.error.bind(console));
        this.dismiss();
    }

    dismiss()
    {
        this.viewCtrl.dismiss(this.stand);
    }
}
