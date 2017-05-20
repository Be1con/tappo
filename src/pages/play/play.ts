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
    public timeLeft: number = 30;
    constructor(public navCtrl: NavController, public navParams: NavParams, private leaderboardService: LeaderboardService, private viewCtrl: ViewController)
    {
        this.leaderboardService.initDB;
        var display = this.result;
        var timer = setInterval(() => {
            if(this.timeLeft != 0)
            {
                this.timeLeft -=  1;
            }
            else
            {
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

    public stand: any = {};
    public isNew = true;
    public action = 'Add';
    public point = '';

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

        this.dismiss();
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

    redirect()
    {
        this.navCtrl.push("./limitscore");
    }
}