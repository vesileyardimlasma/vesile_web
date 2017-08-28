﻿import { Component, OnInit } from '@angular/core';
import { FirebaseObjectFactoryOpts } from "angularfire2/interfaces";
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Component({
    moduleId: module.id,
    templateUrl: 'indigent.search.html'
})
export class IndigentSearchComponent implements OnInit {

    /*
    Send(desc: string) {
      this.items.push({ message: desc });
      this.msgVal = '';
    }
    */

    item: any = null;

    constructor(public af: AngularFireDatabase, private afAuth: AngularFireAuth) {
    }

    ngOnInit() {
        this.af.object('/users/' + localStorage.getItem("currentUser")).subscribe(
            snapshot => {
                this.item = snapshot;
            },
            error => {
                this.item = error;
            }
        );
        
    }
   
}


@Component({
    moduleId: module.id,
    templateUrl: 'indigent.edit.html'
})
export class IndigentEditComponent implements OnInit {

    /*
    Send(desc: string) {
      this.items.push({ message: desc });
      this.msgVal = '';
    }
    */

    item: any = null;

    constructor(public af: AngularFireDatabase, private afAuth: AngularFireAuth) {
    }

    ngOnInit() {
        this.af.object('/users/' + localStorage.getItem("currentUser")).subscribe(
            snapshot => {
                this.item = snapshot;
            },
            error => {
                this.item = error;
            }
        );
        
    }
   
}