﻿import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private afAuth: AngularFireAuth) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem("currentUser") != null) {
            if (this.afAuth.auth==null)
                this.afAuth.authState.subscribe();
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}