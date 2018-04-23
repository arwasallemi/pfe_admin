import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase } from 'angularfire2/database';

import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AlertsService } from '../../services/alerts/alert.service';
import firebase from 'firebase';
/**
 * Generated class for the AlertsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alerts',
  templateUrl: 'alerts.html',
})
export class AlertsPage {
//////////
public alertList:Array<any>;
public loadedAlertList:Array<any>;
public alertRef:firebase.database.Reference;
///////////
  alerts:Observable<any[]>;
  constructor(private alertSrv:AlertsService,public db:AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {

   /* this.alerts=this.alertSrv
    .getAlertList()
    .snapshotChanges()
    .map(
      changes=>{
        return changes.map(c=> ({
          key:c.payload.key, ...c.payload.val()
        }));
      });*/
      this.alertRef = firebase.database().ref('/alert-list');
      this.alertRef.on('value', alertList => {
        let alerts= [];
        alertList.forEach( alert=> {
          alerts.push(alert.val());
          return false;
        });
      
        this.alertList = alerts;
        this.loadedAlertList = alerts;
      });
    
  }
  //////////

  //////////

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertsPage');
  }

  initializeItems(): void {
    this.alertList = this.loadedAlertList;
  }



  getItems(code) {
    // Reset items back to all of the items
    this.initializeItems();
  
    // set q to the value of the searchbar
    var q = code.srcElement.value;
  
  
    // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }
  
    this.alertList = this.alertList.filter((v) => {
      if(v && q) {
        if (v.code.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
      
    });
  
    console.log(q, this.alertList.length);
  
  }
}
