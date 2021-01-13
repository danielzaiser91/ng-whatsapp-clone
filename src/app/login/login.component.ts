import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import User from '../.interfaces/user';
import { SessionService } from '../session.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public user: User;

  constructor(
    private session: SessionService,
    private router: Router,
    private route: ActivatedRoute
  ) { this.user = { name: '', isLoggedIn: false } }

  ngOnInit(): void { }

  onSubmit(loginForm: NgForm) {
    if(loginForm.invalid) return;

    this.user.isLoggedIn = true;
    this.session.setSession(this.user);
    this.router.navigate(['']);


    // TODO:
    // create db entry for user logged in, user name, start session
    // start termination countdown
  }
}
