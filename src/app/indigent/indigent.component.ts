﻿import { Component, OnInit } from '@angular/core';
import { FirebaseObjectFactoryOpts } from "angularfire2/interfaces";
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';

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

    selectedCity;
    cities = [];
    districts = [];
    towns = [];
    selectedDistrict;
    selectedTown;

    constructor(public af: AngularFireDatabase, private afAuth: AngularFireAuth) {
    }

    ngOnInit() {
        var _that=this;
        var ref = firebase.database().ref("/public/adres/turkiye/tbl_il").once("value").then(function (snapshot) {
            snapshot.forEach(element => {
                _that.cities.push(element.val());
            });
        }, function (error) {
            this.item = error;
        });
    }

    onChangeCity(val) {
        var _that = this;
        var ref = firebase.database().ref("/public/adres/turkiye/tbl_ilce");
        if (val) {
            _that.districts = [];
            _that.towns = [];
            ref.orderByChild("il_id").equalTo(val).once("value").then(function (snapshot) {
                snapshot.forEach(element => {
                    _that.districts.push(element.val());
                });
            }, function (error) {
                this.item = error;
            });
        }
    }

    onChangeDistrict(val) {
        var _that = this;
        var ref = firebase.database().ref("/public/adres/turkiye/tbl_semt");
        if (val) {
            _that.towns = [];
            ref.orderByChild("ilce_id").equalTo(val).once("value").then(function (snapshot) {
                snapshot.forEach(element => {
                    _that.towns.push(element.val());
                });
            }, function (error) {
                this.item = error;
            });
        }
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