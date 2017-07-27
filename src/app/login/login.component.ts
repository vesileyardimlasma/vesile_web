﻿import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';
import { AngularFireAuth } from "angularfire2/auth";

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
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private afAuth: AngularFireAuth) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }


    login() {
        this.loading = true;
        this.afAuth.auth.signInWithEmailAndPassword(this.model.username, this.model.password).then(
            data => { this.router.navigate([this.returnUrl]); }
        ).catch(
            error => {
                this.alertService.error(error.message);
                this.loading = false;
            }
            );

    }
}
