import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';

import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Profile } from '../../models/profile';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { Observable } from 'rxjs/Observable';
//import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { UsersPage } from '../users/users';
import { EditPage } from '../edit/edit';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import { ProfilesService } from '../../services/profiles/profiles.service';

import { Subject } from 'rxjs/Subject';
import * as _ from 'lodash';

import firebase from 'firebase';
/**
 * Generated class for the ProfilesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profiles',
  templateUrl: 'profiles.html',
})
export class ProfilesPage{
 
////////////////
public profileList:Array<any>;
public loadedProfileList:Array<any>;
public profileRef:firebase.database.Reference;
//////////////
  public people: Observable<any>;

  profiles:Observable<any[]>;
  constructor(private profileSrv:ProfilesService,public db:AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {


//////////
this.profileRef = firebase.database().ref('/profile');
this.profileRef.on('value', profileList => {
  let prfls= [];
  profileList.forEach( prfl=> {
    prfls.push(prfl.val());
    return false;
  });

  this.profileList = prfls;
  this.loadedProfileList = prfls;
});
//////////
    this.profiles=this.profileSrv.getProfilesList().snapshotChanges().map(
      changes=>{
        return changes.map(c=> ({
          key:c.payload.key, ...c.payload.val()
        }));
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilesPage');
  }
  initializeItems(): void {
    this.profileList = this.loadedProfileList;
  }


  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();
  
    // set q to the value of the searchbar
    var q = searchbar.srcElement.value;
  
  
    // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }
  
    this.profileList = this.profileList.filter((v) => {
      if(v.name && q) {
        if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  
    console.log(q, this.profileList.length);
  
  }
}

