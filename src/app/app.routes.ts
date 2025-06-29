import { Routes } from '@angular/router';
import { SamplePageWithTodoComponent } from './pages/home/sample-page-with-todo.component';
import { LandingComponent } from './pages/landing/landing.component';
import { MapComponent } from './pages/map/map.component';
import { SampleChartsComponent } from './pages/sample-charts/sample-charts.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    { path: 'home', component: SamplePageWithTodoComponent },
    { path: 'landing', component: LandingComponent },
    { path: 'map', component: MapComponent },
    { path: 'graph', component: SampleChartsComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' },
];
