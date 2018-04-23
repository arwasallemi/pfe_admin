import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilesPage } from './profiles';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';

@NgModule({
  declarations: [
    ProfilesPage,
  ],
  imports: [
    //IonicPageModule.forChild(ProfilesPage),
  ],
})
export class ProfilesPageModule {}
