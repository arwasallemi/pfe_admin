import { Component } from '@angular/core';
import { NavController, ToastController, NavParams, PopoverController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
//import { AngularFireDatabaseModule,AngularFireDatabase } from 'angularfire2/database' 
import { EditPage } from '../edit/edit';
import { User } from '../../models/users';
import { Profile } from '../../models/profile';
import { User_profile } from '../../services/user_profile/user_profile.service';

import * as firebase from 'firebase';
import { database } from 'firebase';
import { ProfilesService } from '../../services/profiles/profiles.service';
import { AlertsPage } from '../alerts/alerts';
import { ProfilePage } from '../profile/profile';
import { ProfilesPage } from '../profiles/profiles';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  user:User
  profiles:Observable<any[]>;
  firstname:any;
  lastname:any;
  customerID : any;
  number: any;
  firstName: any;
  lastName : any;
  dateBirth : any;
  gender : any;
  height : any;
  hairColor : any;
  eyeColor : any;
  build:any;
  ethnicity : any;
  nationality : any;
  language : any ;
  prof:Profile;

  constructor(public popoverCtrl: PopoverController,private profile:ProfilesService,private usersSrv:User_profile,public navParams: NavParams,private toast:ToastController,private afAuth:AngularFireAuth,public navCtrl: NavController,
    /*afDatabase:AngularFireDatabase*/) {
var myUserId=firebase.auth().currentUser.uid;
//this.profiles=afDatabase.list('/profile');
///////
console.log(myUserId);
/////////
this.displayUser(myUserId);
  }



deleteProfile(profile:Profile){

}
editProfile(profile:Profile)
  {
      
    
  }
  displayUser(theUserId)
  {
    var that=this;
    this.usersSrv.viewUser(theUserId).then(snapshot=>{
      that.firstname=snapshot.val().firstname;
      that.lastname=snapshot.val().lastname;
      that.build=snapshot.val().build;
      that.customerID=snapshot.val().customerID;
      that.dateBirth=snapshot.val().dateBirth;
      that.ethnicity=snapshot.val().ethnicity;
      that.eyeColor=snapshot.val().eyeColor;
      that.gender=snapshot.val().gender;
      that.hairColor=snapshot.val().hairColor;
      that.height=snapshot.val().height;
      that.language=snapshot.val().language;
      that.nationality=snapshot.val().nationality;
      that.number=snapshot.val().number;
    })
 
  }
ionViewWillLoad()
{

  this.afAuth.authState.take(1).subscribe(data=>{
  console.log(data);

  //this.profileData=this.afDatabase.object(`profile/data.uid}`)
    })
    //this.user=this.navParams.get('user');
  }

}
