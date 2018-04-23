import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/users';
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from "angularfire2/auth";
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('email') email ;
user ={} as User;
getInfo={
  username:'',
  email:'',
  loggedIn:false,
}
  constructor(private afauth:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
 async login(user:User){
   const result =await this.afauth.auth.signInWithEmailAndPassword(user.email, user.password);

if(result){
  this.navCtrl.setRoot(TabsPage);
//window.alert(user.email);

}
}
register(){
  this.navCtrl.setRoot(RegisterPage);
}
}
