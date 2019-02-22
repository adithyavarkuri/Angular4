import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent  } from './dashboard/dashboard.component';
import { HeroDetailComponent } from  './hero-detail/hero-detail.component';
import { RoutingguardGuard } from './routingguard.guard';
import { TestresolverService } from './testresolver.service';
import { FormscomponentComponent } from './formscomponent/formscomponent.component';
import {HeroFormComponent} from './hero-form/hero-form.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { 
    path: 'dashboard',
    component: DashboardComponent,
    resolve: {
      inputFiles: TestresolverService
    }},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path : 'details/:id' , component:HeroDetailComponent ,canActivate :[RoutingguardGuard]},
  {path: 'forms' ,component:FormscomponentComponent},
  {path: 'ftemplateDrivenforms' ,component:HeroFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}