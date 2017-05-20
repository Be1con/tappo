import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {TimerComponent} from "../components/timer/timer";
import { ListPage } from '../list/list';
import { LeaderboardService } from '../../services/leaderboard.service';
/**
 * Generated class for the Rule page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var number=0, Gnumber="Times";

@IonicPage()
@Component({
    selector: 'page-play',
    templateUrl: 'play.html',
})

export class PlayPage
{
    //Variables
    public timeLeft: number = 30;
    public stand: any = {};
    public isNew = true;
    public action = 'Add';
    public point;

    constructor(public navCtrl: NavController, public navParams: NavParams, private leaderboardService: LeaderboardService, private viewCtrl: ViewController)
    {
        this.leaderboardService.initDB;
        var timer = setInterval(() => {
            if(this.timeLeft != 0)
            {
                this.timeLeft -=  1;
            }
            else
            {
                this.point = this.result;
                this.save;
                clearInterval(timer);
            }
        }, 1000);
    }

    count()
    {   
        number++;
        // Gnumber = Gnumber + number;
        console.log(number);
    }

    result()
    {
        var res = document.querySelector('#score').textContent  = number+" "+Gnumber;
        res;
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

    back()
    {
        this.navCtrl.push("./limitscore");
    }

    redirect()
    {
        this.navCtrl.push("./ranking");
    }
}