import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {RoutevalidateService } from './routevalidate.service';

@Injectable({
  providedIn: 'root'
})
export class RoutingguardGuard implements CanActivate {
  
  constructor( private routevalidateService :RoutevalidateService){}

  canActivate() {
    return this.routevalidateService.isvalidated();
  }
}
