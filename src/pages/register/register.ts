import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/users';
import { AngularFireAuth } from "angularfire2/auth";
import { ProfilePage } from '../profile/profile';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
user={} as User;
  constructor(private afauth:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
async register(user:User){
const result=await this.afauth.auth.createUserWithEmailAndPassword(user.email,user.password);
if(result){
  this.navCtrl.setRoot(ProfilePage);
}
}
}
