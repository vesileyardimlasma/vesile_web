import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { IndigentEditComponent, IndigentSearchComponent } from './indigent/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_services/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'indigent/search', component: IndigentSearchComponent },
    { path: 'indigent/edit', component: IndigentEditComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes/*, { enableTracing: true }*/);