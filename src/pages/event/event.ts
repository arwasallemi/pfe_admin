import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as moment from 'moment';
/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {


  event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), allDay: false };
  minDate = new Date().toISOString();

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
 

    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    this.event.startTime = preselectedDate;
    this.event.endTime = preselectedDate;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
  }
  cancel() {
    this.viewCtrl.dismiss();
  }
 
  save() {
    this.viewCtrl.dismiss(this.event);
  }

}
