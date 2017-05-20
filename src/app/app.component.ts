import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RulePage } from '../pages/rule/rule';
import { PlayPage } from '../pages/play/play';
import { PlayerPage } from '../pages/player/player';
import { RankingPage } from '../pages/ranking/ranking';
import { RegisterPage } from '../pages/register/register';
import { ResultPage } from '../pages/result/result'
import { SettingPage } from '../pages/setting/setting';
import { MenuPage } from '../pages/menu/menu';
import { LimitscorePage } from '../pages/limitscore/limitscore';

import { Timer } from '../components/timer';

import { LeaderboardService } from '../services/leaderboard.service';

@Component({
  templateUrl: 'app.html',
  providers: [LeaderboardService]
})
export class MyApp {

  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

