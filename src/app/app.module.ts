//Import Essential Components
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Timer } from '../components/timer/timer';

//Import Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RulePage } from '../pages/rule/rule';
import { PlayPage } from '../pages/play/play';
import { PlayerPage } from '../pages/player/player';
import { RankingPage } from '../pages/ranking/ranking';
import { RegisterPage } from '../pages/register/register';
import { ResultPage } from '../pages/result/result';
import { SettingPage } from '../pages/setting/setting';
import { MenuPage } from '../pages/menu/menu';
import { LimitscorePage } from '../pages/limitscore/limitscore';
import { DetailPage } from '../pages/detail/detail';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RulePage,
    PlayPage,
    PlayerPage,
    RankingPage,
    RegisterPage,
    ResultPage,
    SettingPage,
    MenuPage,
    LimitscorePage,
    DetailPage,
    Timer
    //GamePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RulePage,
    PlayPage,
    PlayerPage,
    RankingPage,
    RegisterPage,
    ResultPage,
    SettingPage,
    MenuPage,
    LimitscorePage,
    DetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Timer
  ]
})
export class AppModule {}
