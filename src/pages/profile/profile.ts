import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from 'angularfire2/database';
import { HomePage } from '../home/home';
import { User } from '../../models/users';
import { ProfilesService } from '../../services/profiles/profiles.service';
import { LoginPage } from '../login/login';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
profile={} as Profile;

  constructor(private navCtrl:NavController,private profileSrv:ProfilesService,private afAuth:AngularFireAuth,  private afDatabase:AngularFireDatabase,
     public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
/*createProfile(profile:Profile)
{
this.profileSrv.addProfile(profile);
}*/
createProfile(){
  this.afAuth.authState.take(1).subscribe(auth=>{
    this.afDatabase.object
    (`profile/${auth.uid}`).set(this.profile).then(()=>this.navCtrl.push(LoginPage));
  })
}
}
