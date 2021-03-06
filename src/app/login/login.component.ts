﻿import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../_services/index';
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService,
        private afAuth: AngularFireAuth) { }

    ngOnInit() {
        // reset login status
        this.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    }

    login() {
        this.loading = true;
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(data => {
                this.afAuth.auth.signInWithEmailAndPassword(this.model.username, this.model.password).then(
                    data => {
                        this.router.navigate([this.returnUrl]);
                        this.alertService.success("Login Successful", false);
                        localStorage.setItem("currentUser", this.afAuth.auth.currentUser.uid);
                    }
                ).catch(
                    error => {
                        this.alertService.error(error.message);
                        this.logout();
                        this.loading = false;
                    });
            })
            .catch(error => {
                this.alertService.error(error.message);
                this.logout();
                this.loading = false;
            });
    }

    logout() {
        if (this.afAuth.auth.currentUser != null) {
            this.afAuth.auth.signOut();
            localStorage.removeItem("currentUser");
        }
    }
}
