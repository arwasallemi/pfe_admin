import { Component,ViewChild } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { UsersPage } from '../pages/users/users';
import { LoginPage } from '../pages/login/login';
import { ProfilesPage } from '../pages/profiles/profiles';
import { ProfilePage } from '../pages/profile/profile';
import { AlertsPage } from '../pages/alerts/alerts';
import * as firebase from 'firebase';
import { User_profile } from '../services/user_profile/user_profile.service';
import { User } from '../models/users';

import { SettingsPage } from '../pages/settings/settings';
//import { TimerPage } from '../pages/timer/timer';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  text: any = {
    Year: 'Year',
    Month: 'Month',
    Weeks: "Weeks",
    Days: "Days",
    Hours: "Hours",
    Minutes: "Minutes",
    Seconds: "Seconds",
    MilliSeconds: "MilliSeconds"
  };

  rootPage:any = LoginPage;
@ViewChild(Nav) nav:Nav;
username:any;

  constructor(private usersSrv:User_profile,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
///////////////
displayUser(theUserId){
  var that=this;
  this.usersSrv.viewUser(theUserId).then(snapshot=>{
    that.username=snapshot.val().name;
  })
}

//////////////
gotoprofiles(){
  this.nav.setRoot(ProfilesPage);
}
gotoalerts(){
  this.nav.setRoot(AlertsPage);
}
gotohome(){
  this.nav.setRoot(HomePage);
}

gotosettings(){
  this.nav.setRoot(SettingsPage);
}

}

