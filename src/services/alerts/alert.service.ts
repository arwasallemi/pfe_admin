import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Alert } from "../../models/alert";





@Injectable()
export class AlertsService
{

    private alertsListRef=this.db.list<Alert>('/alert-list');

constructor(private db:AngularFireDatabase){}

getAlertList(){
    return this.alertsListRef;
}
}