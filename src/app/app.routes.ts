import { Routes } from '@angular/router';
import { SamplePageWithTodoComponent, LandingComponent, MapComponent, SampleChartsComponent, LoginComponent, ProfileComponent } from './pages';

export const routes: Routes = [
    { path: 'home', component: SamplePageWithTodoComponent },
    { path: 'landing', component: LandingComponent },
    { path: 'map', component: MapComponent },
    { path: 'graph', component: SampleChartsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'profile', component: ProfileComponent },
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' },
];
