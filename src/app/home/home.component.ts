import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public authservice: AuthService,
    private router: Router) { }

  loginWithFacebook() {
    this.authservice.facebookLogin().then(() => {
      this.router.navigate(['/group-list']);
    }).catch(err => console.log(err));
  }

  loginWithGoogle() {
    this.authservice.googleLogin().then(() => {
      this.router.navigate(['/group-list']);
    }).catch(err => console.log(err));
  }

  ngOnInit() {
  }

}
