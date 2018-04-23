import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { Firebase } from '@ionic-native/firebase';

import { AngularFireModule } from 'angularfire2';
import { UsersPage } from '../pages/users/users';
import { NgModule, ErrorHandler } from '@angular/core';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AngularFireDatabase ,AngularFireDatabaseModule } from 'angularfire2/database' 
import { AngularFireAuthModule, AngularFireAuth } from "angularfire2/auth";
import { NotificationPage } from '../pages/notification/notification';
import { AlertsPage } from '../pages/alerts/alerts';
import { ProfilePage } from '../pages/profile/profile';
import { EditPage } from '../pages/edit/edit';
import { ProfilesService } from '../services/profiles/profiles.service';
//import { ProfilesPage } from '../pages/profiles/profiles';
import { ToastService } from '../services/toast/toast.service';
import { AlertsService } from '../services/alerts/alert.service';
import { ProfilesPage } from '../pages/profiles/profiles';
import { Http } from "@angular/http";
import { NavController } from "ionic-angular";
import { User_profile } from '../services/user_profile/user_profile.service';
import {HttpModule} from '@angular/http';
import { SettingsPage } from '../pages/settings/settings';
import { NgCalendarModule  } from 'ionic2-calendar';
import { TabsPage } from '../pages/tabs/tabs';

//import { TimerPage } from '../pages/timer/timer';

const config={
  apiKey: "AIzaSyAF8uscaquG7QeHW-qyAoVYCELwU5C5poU",
  authDomain: "test-9cea6.firebaseapp.com",
  databaseURL: "https://test-9cea6.firebaseio.com",
  projectId: "test-9cea6",
  storageBucket: "test-9cea6.appspot.com",
  messagingSenderId: "1091721337371"
}

@NgModule({
  declarations: [
    //CountDown,
    MyApp,
    HomePage,
    UsersPage,
    LoginPage,
    RegisterPage,
    AlertsPage,
    NotificationPage,
    ProfilesPage,
    ProfilePage,
    SettingsPage,
    //TimerPage
  TabsPage,
   // EditPage,
  ],
  imports: [
    //PopoverComponent,
    NgCalendarModule,
    BrowserModule,
    AngularFireModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
      menuType: 'push',
      platforms: {
        ios: {
          menuType: 'reveal',
        },
        android: {
          menuType: 'push',
        }
      }
    }),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config)
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UsersPage,
    LoginPage,
    RegisterPage,
    NotificationPage,
    AlertsPage,
   ProfilesPage,
    ProfilePage,
    SettingsPage,
  //  TimerPage
    //EditPage,
TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
   AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProfilesService,
    ToastService,
    AlertsService,
    User_profile,
    //Http
  ]
})
export class AppModule {}
