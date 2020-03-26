import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auf: AngularFireAuth,
              private router: Router ) {}

// Este guardian verifica si hay un usuario logueado

  canActivate(): Observable<boolean> {
    return this.auf.authState.pipe(
      map( user => {
          if (!user) {
              this.router.navigate(['main']);
              return false;
          } else {
              return true;
          }
      })
  );
  }
}
