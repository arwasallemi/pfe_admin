import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Firebase } from '@ionic-native/firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase} from 'angularfire2/database';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { User } from '../../models/users';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  //user={} as User;
  usersList: FirebaseListObservable<any>; 
  constructor(private afauth:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,
    public db:AngularFireDatabase) 
  {

  }
/*  createProfile(){
    this.afauth.authState.take(1).subscribe(auth =>{
  this.db.object(`profile/${auth.uid}`).set(this.user).then(()=>this.navCtrl.setRoot(HomePage));
  
  
    })
  }*/
  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

}
