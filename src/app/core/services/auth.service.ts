import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  user$: Observable<firebase.User>;


  constructor(private afAuth: AngularFireAuth) {
    this.user$ = this.afAuth.authState;
  }

  oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider);

  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.oAuthLogin(provider);
  }

  logout() {
    return this.afAuth.auth.signOut();
  }
}
