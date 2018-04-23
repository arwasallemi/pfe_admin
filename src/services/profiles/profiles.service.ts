import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Profile } from "../../models/profile";
import { AngularFireAuth } from "angularfire2/auth";
import { HomePage } from "../../pages/home/home";

import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Observable } from "rxjs/Observable";



@Injectable()
export class ProfilesService
{
 private profilesListRef=this.db.list<Profile>('/profile');
    profile ={} as Profile;
constructor(private afAuth:AngularFireAuth,private db:AngularFireDatabase){}

getProfilesList(){
    return this.profilesListRef;
}

addProfile(profile:Profile){
 return this.profilesListRef.push(profile);

}
editprofile(profile:Profile){
    return this.profilesListRef.update(profile.key,profile);
}
removeprofile(profile:Profile){
    return this.profilesListRef.remove(profile.key);
}

/////////query
  
}