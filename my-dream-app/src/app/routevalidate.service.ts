import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutevalidateService {

  constructor() { }

  isvalidated(): boolean {
    return true;
  }
}
