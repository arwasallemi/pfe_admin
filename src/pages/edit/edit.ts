import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile';
import { ProfilesService } from '../../services/profiles/profiles.service';
import { HomePage } from '../home/home';
import { ToastService } from '../../services/toast/toast.service';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {


  profile:Profile;
  constructor(private toast:ToastService,public navCtrl: NavController, public navParams: NavParams,private profilesSrv:ProfilesService) {
  }

  ionViewWillLoad() {
    this.profile=this.navParams.get('profile');
  }


  saveProfile(profile:Profile){
      this.profilesSrv.editprofile(profile).then(()=>{
        this.toast.show(`${profile.firstName} Saved!!!`)
        this.navCtrl.setRoot(HomePage);
      })
  }


  deleteProfile(profile:Profile){
    this.profilesSrv.removeprofile(profile).then(()=>{
      this.toast.show(`${profile.firstName} deleted!!`)
      this.navCtrl.setRoot(HomePage);
    })
  }
}