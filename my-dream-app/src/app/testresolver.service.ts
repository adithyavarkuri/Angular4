import { Injectable } from '@angular/core';
import { Resolve ,ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { HeroService } from './hero.service';
import { Hero } from './heroes/hero';
import { Observable, of } from 'rxjs';
import { reject, resolve } from 'q';

@Injectable({
  providedIn: 'root'
})
export class TestresolverService implements Resolve<any>{
  heros;

  constructor(private heroservice:HeroService) { }

  // resolve(route: ActivatedRouteSnapshot): Observable<Hero[]>  {
  //   return this.heroservice.getHeros();
  // }

  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
  // {
  //   return new Promise((resolve, reject) => {
  //     Promise.all([
  //       this.getHeros(),
  
  //     ])
  //     .then(
  //       ()=>{
  //       resolve();
  //     },
  //     reject
  //     );
  //   });
  // }
  // getHeros(){
  //   return new Promise((resolve, reject) => {
  //     // this.http.get('')
  //     // .subscribe((response: any)=>{
  //     //   this.heros = response;
  //     //   resolve(response);
  //     // }, reject);
  //   })
  // }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    //let orderNumber = route.paramMap.get('orderid');

    let temp = new Observable();

    temp = this.heroservice.getHeros();

    return temp;

  }


}
